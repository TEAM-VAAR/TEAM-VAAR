import React from "react"
import SchoolIndexPage from "./pages/SchoolIndexPage"
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ShowSchoolPage from "./pages/ShowSchoolPage"
import ShowReviewPage from "./pages/ShowReviewPage"
import ReviewIndexPage from "./pages/ReviewIndexPage"
import ReviewNew from "./pages/ReviewNew"
import SchoolNew from "./pages/SchoolNew"
import ReviewEdit from "./pages/ReviewEdit"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        reviews: [],
        schools: [],
    }
}

componentDidMount() {
  this.readReview()
  this.readSchool()
}

readReview = () => {
  fetch("/reviews")
  .then(response => response.json())
  .then(reviewsArray => this.setState({reviews: reviewsArray}))
  .catch(errors => console.log("Review read errors:", errors))
}

readSchool = () => {
  fetch("/schools")
  .then(response => response.json())
  .then(schoolsArray => this.setState({schools: schoolsArray}))
  .catch(errors => console.log("School read errors:", errors))
}

createReview = (newReview) => {
  fetch("/reviews", {
    body: JSON.stringify(newReview),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST" 
  })
  .then(response => response.json())
  .then(() => this.readReview())
  .catch(errors => console.log("New review errors: ", errors))
}

createSchool = (newSchool) => {
  fetch("/schools", {
    body: JSON.stringify(newSchool),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST" 
  })
  .then(response => response.json())
  .then(() => this.readSchool())
  .catch(errors => console.log("New school errors: ", errors))
}

updateReview =(editReview, id) => {
  fetch(`/reviews/${id}`, {
    body: JSON.stringify(editReview),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(review => {
    this.setState({
      reviews: this.state.reviews.map(review => {
        if(review.id === id) {
          return review = editReview
        } else {
          return review
        }
      })
    })
  })
  .catch(error => console.log(error))
}

  render () {
    const {
      current_user,
    } = this.props

    return (
      <>

        <Router>
        <Header {...this.props}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/schoolindex" render={(props) => <SchoolIndexPage schools={this.state.schools}/>} />
            <Route path="/reviewindex" render={(props) => <ReviewIndexPage reviews={this.state.reviews}/>} />
          
            <Route path="/schoolshow/:id" render ={(props) => {
              let id = props.match.params.id
              let school = this.state.schools.find(school => school.id === +id)
              return <ShowSchoolPage school={school}/> }} />
            <Route path="/reviewshow/:id" render ={(props) => {
              let id = props.match.params.id
              let review = this.state.reviews.find(review => review.id === +id)
              return <ShowReviewPage review={review}/> }} />

            <Route path="/reviewnew" render={() => {
              return <ReviewNew createReview = {this.createReview} current_user={this.props.current_user} />
            }} />

            <Route path="/schoolnew" render={() => {
              return <SchoolNew createSchool = {this.createSchool} current_user={this.props.current_user} />
            }} />

            <Route path="/reviewedit/:id" render={(props) => {
              if(current_user) {
                let id = +props.match.params.id
                let review = this.state.reviews.find(review => review.id === id)
                if(current_user.id === review.user_id) {
                  let myReviews = this.state.reviews.filter(review => review.user_id === current_user.id)
                  return <ReviewEdit review={myReviews} reviews={this.state.reviews} updateReview = {this.updateReview} current_user={this.props.current_user} />
                }
              }
            }} />

          </Switch>
        </Router>

      </>
    );
  }
}

export default App

import React from "react"
import SchoolIndexPage from "./pages/SchoolIndexPage"
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ShowSchoolPage from "./pages/ShowSchoolPage"
import ShowReviewPage from "./pages/ShowReviewPage"
import ReviewIndexPage from "./pages/ReviewIndexPage"
import ProtectedReviewIndexPage from "./pages/ProtectedReviewIndexPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        reviews: [],
        schools: [],
        isLoading: false
    }
}

async componentDidMount() {
  this.setState({ isLoading: true})
  this.readReview()
  this.readSchool()
}

readReview = () => {
  fetch("http://localhost:3000/reviews")
  .then(response => response.json())
  .then(reviewsArray => this.setState({reviews: reviewsArray, isLoading: "done" }))
  .catch(errors => console.log("Review read errors:", errors))
}

readSchool = () => {
  fetch("http://localhost:3000/schools")
  .then(response => response.json())
  .then(schoolsArray => this.setState({schools: schoolsArray}))
  .catch(errors => console.log("School read errors:", errors))
}

  render () {
    const {
      current_user
    } = this.props

    return (
      <>
        <Router>
        <Header {...this.props}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/schoolindex" render={(props) => <SchoolIndexPage schools={this.state.schools}/>} />
            <Route path="/reviewindex" render={(props) => <ReviewIndexPage reviews={this.state.reviews}/>} />
            
            <Route path="/myreviews" render={(props) => {
              if(current_user) {
                let myReviews = this.state.reviews.filter(review => review.user_id === current_user.id)
                return <ProtectedReviewIndexPage review={myReviews} isLoading={this.state.isLoading}/>
              } else {
                return <Route path="/reviewindex" render={(props) => <ReviewIndexPage reviews={this.state.reviews}/>} />
              }
            }} />
            <Route path="/schoolshow/:id" render ={(props) => {
              let id = props.match.params.id
              let school = this.state.schools.find(school => school.id === +id)
              return <ShowSchoolPage school={school}/> }} />
            <Route path="/reviewshow/:id" render ={(props) => {
              let id = props.match.params.id
              let review = this.state.reviews.find(review => review.id === +id)
              return <ShowReviewPage review={review}/> }} />

          </Switch>
        </Router>

      </>
    );
  }
}

export default App

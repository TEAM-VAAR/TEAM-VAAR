import React from "react"
import IndexPage from "./pages/IndexPage"
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ShowSchoolPage from "./pages/ShowSchoolPage"
import ShowReviewPage from "./pages/ShowReviewPage"
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
  fetch("http://localhost:3000/reviews")
  .then(response => response.json())
  .then(reviewsArray => this.setState({reviews: reviewsArray}))
  .catch(errors => console.log("Review read errors:", errors))
}

readSchool = () => {
  fetch("http://localhost:3000/schools")
  .then(response => response.json())
  .then(schoolsArray => this.setState({schools: schoolsArray}))
  .catch(errors => console.log("School read errors:", errors))
}

  render () {
    return (
      <>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/indexpage" component={IndexPage} />
            <Route path="/indexpage" render={(props) => <IndexPage {...props} schools={this.state.schools}/>} /> */}
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

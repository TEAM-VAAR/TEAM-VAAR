import React from "react"
import IndexPage from "./pages/IndexPage"
import HomePage from './pages/HomePage'
import Header from './components/Header'
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
          </Switch>
        </Router>

      </>
    );
  }
}

export default App

import React from "react"
import SchoolIndexPage from "./pages/SchoolIndexPage"
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import ShowSchoolPage from "./pages/ShowSchoolPage"
import ShowReviewPage from "./pages/ShowReviewPage"
import ReviewIndexPage from "./pages/ReviewIndexPage"
import ProtectedReviewIndexPage from "./pages/ProtectedReviewIndexPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReviewNew from "./pages/ReviewNew"
import SchoolNew from "./pages/SchoolNew"
import NotFound from "./pages/NotFoundPage"
import './App.css'
import AboutUs from './pages/AboutUsPage'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      schools: [],
    };
  }

  async componentDidMount() {
    this.readReview();
    this.readSchool();
  }

  readReview = () => {
    fetch('/reviews')
      .then((response) => response.json())
      .then((reviewsArray) => this.setState({ reviews: reviewsArray }))
      .catch((errors) => console.log('Review read errors:', errors));
  };

  readSchool = () => {
    fetch('/schools')
      .then((response) => response.json())
      .then((schoolsArray) => this.setState({ schools: schoolsArray }))
      .catch((errors) => console.log('School read errors:', errors));
  };

  createReview = (newReview) => {
    fetch('/reviews', {
      body: JSON.stringify(newReview),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(() => this.readReview())
      .catch((errors) => console.log('New review errors: ', errors));
  };

  createSchool = (newSchool) => {
    fetch('/schools', {
      body: JSON.stringify(newSchool),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(() => this.readSchool())
      .catch((errors) => console.log('New school errors: ', errors));
  };

  deleteReview = (id) => {
    fetch(`/reviews/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => this.readReview())
      .catch((errors) => console.log('delete errors:', errors));
  };

  render() {
    const { current_user } = this.props;

    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path='/'>
              <HomePage {...this.props} />
            </Route>
            <Route
              path='/schoolindex'
              render={(props) => (
                <SchoolIndexPage schools={this.state.schools} />
              )}
            />
            <Route
              path='/schoolindex'
              render={(props) => (
                <SchoolIndexPage schools={this.state.schools} />
              )}
            />
            <Route
              path='/reviewindex'
              render={(props) => (
                <ReviewIndexPage reviews={this.state.reviews} />
              )}
            />
            <Route
              path='/myreviews'
              render={(props) => {
                if (current_user) {
                  let myReviews = this.state.reviews.filter(
                    (review) => review.user_id === current_user.id
                  );
                  return (
                    <ProtectedReviewIndexPage
                      review={myReviews}
                      schools={this.state.schools}
                      deleteReview={this.deleteReview}
                    />
                  );
                }
              }}
            />
            <Route
              path='/schoolshow/:id'
              render={(props) => {
                let id = props.match.params.id;
                let school = this.state.schools.find(
                  (school) => school.id === +id
                );
                let schoolSpecificReviews = this.state.reviews.filter(
                  (review) => review.school_id === school.id
                );
                return (
                  <ShowSchoolPage
                    school={school}
                    review={schoolSpecificReviews}
                  />
                );
              }}
            />
            <Route
              path='/reviewshow/:id'
              render={(props) => {
                let id = props.match.params.id;
                let review = this.state.reviews.find(
                  (review) => review.id === +id
                );
                return <ShowReviewPage review={review} />;
              }}
            />
            <Route
              path='/reviewnew'
              render={() => {
                if (current_user) {
                  return (
                    <ReviewNew
                      createReview={this.createReview}
                      current_user={current_user}
                    />
                  );
                } else {
                  return <Route component={NotFound} />;
                }
              }}
            />
            <Route
              path='/schoolnew'
              render={() => {
                if (current_user) {
                  return (
                    <SchoolNew
                      createSchool={this.createSchool}
                      current_user={current_user}
                    />
                  );
                } else {
                  return <Route component={NotFound} />;
                }
              }}
            />

            <Route
              path='/reviewedit/:id'
              render={(props) => {
                if (current_user) {
                  let id = +props.match.params.id;
                  let review = this.state.reviews.find(
                    (review) => review.id === id
                  );
                  if (current_user.id === review.user_id) {
                    let myReviews = this.state.reviews.filter(
                      (review) => review.user_id === current_user.id
                    );
                    return (
                      <ReviewEdit
                        review={myReviews}
                        reviews={this.state.reviews}
                        updateReview={this.updateReview}
                        current_user={current_user}
                      />
                    );
                  } else if (current_user.id !== review.user_id) {
                    return <Route component={NotFound} />;
                  } else {
                    return <Route component={NotFound} />;
                  }
                }
              }}
            />

            <Route
              path='/schoolshow/:id'
              render={(props) => {
                let id = props.match.params.id;
                let school = this.state.schools.find(
                  (school) => school.id === +id
                );
                return <ShowSchoolPage school={school} />;
              }}
            />
            <Route
              path='/reviewshow/:id'
              render={(props) => {
                let id = props.match.params.id;
                let review = this.state.reviews.find(
                  (review) => review.id === +id
                );
                return <ShowReviewPage review={review} />;
              }}
            />

            <Route exact path='/aboutus' component={AboutUs} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App

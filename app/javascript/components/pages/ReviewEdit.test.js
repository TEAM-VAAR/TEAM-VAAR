import "./setup.js"
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import ReviewEdit from './ReviewEdit'


Enzyme.configure({ adaptçer: new Adapter() })

describe("When ReviewEdit renders", () => {
    let renderedReviewEdit

    let props = {
        // name: "LEARN academy",
        // current_user: {id: 1},
        logged_in: true,
        // user_id: {id: 1},
        // school_id: 1,
        current_user: {id: 1, email: "alvin@email.com"},
        
        // editReview: {title: "Title", date_posted: "August 23", review_text: "Review Text"}
    }

    // beforeEach(() => {
    //     renderedReviewEdit = shallow(<ReviewEdit {...props} />)
    // })

    it("finds the h3 header", () => {        
        const reviewEditHeading = mount(<ReviewEdit {...props} />)
        console.log(reviewEditHeading.debug())
        const reviewEditHeadingCheck = reviewEditHeading.find("h3")
        expect(reviewEditHeadingCheck.text()).toEqual("Edit your review")
      })
  
  })
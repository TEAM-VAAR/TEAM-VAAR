import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewNew from './ReviewNew'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewNew renders", () => {
    let renderedReviewNew;
    let props = { current_user: {id:1} }

    beforeEach(() => {
        renderedReviewNew = shallow(<ReviewNew {...props} />)
    })

    it("displays a heading", () => {
        const reviewNewHeading = renderedReviewNew.find("h3")
        expect(reviewNewHeading.text()).toEqual("New Review")  
      })
  
      it("displays 4 FormGroups", () => {
        const reviewNewHeading = renderedReviewNew.find("FormGroup")
        expect(reviewNewHeading.length).toEqual(4)  
      })
  })
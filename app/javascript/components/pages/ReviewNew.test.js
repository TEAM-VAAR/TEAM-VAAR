import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewNew from './ReviewNew'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewNew renders", () => {
    let renderedReviewNew;
    // let props = { current_user: {id:1} }
    let props = { current_user: {id: 5} }


    beforeEach(() => {
        renderedReviewNew = shallow(<ReviewNew {...props} />)
    })

    it("finds a heading", () => {
      const reviewNewHeading = renderedReviewNew
      expect(reviewNewHeading.find("h3")).toHaveLength(1)
    })
  
    // it("finds the FormGroup", () => {
    //   const reviewNewFormGroup = renderedReviewNew
    //   expect(reviewNewFormGroup.find("FormGroup"))
    //   })

    // it("finds the Label", () => {
    //   const reviewNewLabel = renderedReviewNew
    //   expect(reviewNewLabel.find("Label"))
    // })
  })
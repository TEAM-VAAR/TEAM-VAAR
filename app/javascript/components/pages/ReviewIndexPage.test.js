import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewIndexPage from './ReviewIndexPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewIndex renders", () => {
    it("displays a heading", () => {
      const reviewIndexPage = shallow(<ReviewIndexPage />)
      const reviewIndexPageHeading = reviewIndexPage.find("h3")
  
      expect(reviewIndexPageHeading.text()).toEqual("Review Page")  
    })
  })
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUsPage from './AboutUsPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
    it("displays a heading", () => {
      const aboutUsPage = shallow(<AboutUsPage />)
      const aboutUsPageHeading = aboutUsPage.find("h2")
      const aboutUsPageBody = aboutUsPage.find("items")
      const aboutUsPageCarousel = aboutUsPage.find("AboutUsCarousel")
  
      expect(aboutUsPageHeading.text()).toEqual("About Us")  
      expect(aboutUsPage.html()).toMatchSnapshot()
      
    })
  })
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SchoolIndexPage from './SchoolIndexPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When SchoolIndex renders", () => {
    it("displays a heading", () => {
      const schoolIndexPage = shallow(<SchoolIndexPage />)
      const schoolIndexPageHeading = schoolIndexPage.find("h3")
  
      expect(schoolIndexPageHeading.text()).toEqual("School Page")  
    })
  })
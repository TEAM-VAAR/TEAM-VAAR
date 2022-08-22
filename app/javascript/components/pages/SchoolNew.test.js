import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SchoolNew from './SchoolNew'
Enzyme.configure({ adapter: new Adapter() })

describe("When SchoolNew renders", () => {
    let renderedSchoolNew;
    let props = { current_user: {id:1} }

    beforeEach(() => {
        renderedSchoolNew = shallow(<SchoolNew {...props} />)
    })

    it("displays a heading", () => {
        const schoolNewHeading = renderedSchoolNew.find("h3")
        expect(schoolNewHeading.text()).toEqual("New School")  
      })
  
      it("displays 4 FormGroups", () => {
        const schoolNewHeading = renderedSchoolNew.find("FormGroup")
        expect(schoolNewHeading.length).toEqual(1)  
      })
  })
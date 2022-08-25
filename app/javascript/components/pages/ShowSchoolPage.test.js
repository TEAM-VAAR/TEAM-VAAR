import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShowSchoolPage from './ShowSchoolPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When ShowSchoolPage renders", () => {

    const school = {
        name: "LEARN academy"
    }

  let renderedSchoolShow;

  beforeEach(() => {
    renderedSchoolShow = shallow(<ShowSchoolPage school={school} />);
  });

  it("displays one Card", () => {
    const schoolShowHeading = renderedSchoolShow.find("Card")
    expect(schoolShowHeading.length).toEqual(1)
  })

  it("displays h3 header", () => {
    const schoolShowHeading = renderedSchoolShow.find("h3")
    expect(schoolShowHeading.text()).toEqual("School Reviews")  
  })

  it("displays one CardBody", () => {
    const schoolShowHeading = renderedSchoolShow.find("CardBody")
    expect(schoolShowHeading.length).toEqual(1)
  })

  it("displays one link", () => {
    const schoolShowHeading = renderedSchoolShow.find("Link")
    expect(schoolShowHeading.text()).toEqual("Write a review")  
  })

  
})

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
})

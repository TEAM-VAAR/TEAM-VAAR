import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  it("displays a div", () => {
    const footer = shallow(<Footer />)
    const footerHeading = footer.find("div")
    expect(footerHeading.length).toEqual(1)
  })
})

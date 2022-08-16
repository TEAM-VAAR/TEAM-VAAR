import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  it("displays 5 total NavItem", () => {
    const header = shallow(<Header />)
    const headerHeading = header.find("NavItem")
    expect(headerHeading.length).toEqual(5)
  })
})

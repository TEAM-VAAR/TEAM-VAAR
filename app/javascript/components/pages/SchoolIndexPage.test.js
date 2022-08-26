import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SchoolIndexPage from './SchoolIndexPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When SchoolIndex renders", () => {
    it("displays a Card", () => {

      let schools = [{name: "LEARN academy"}, {name: "testing school"}]
      const schoolIndexPage = shallow(<SchoolIndexPage schools={schools} />)
      const schoolIndexPageCard = schoolIndexPage.find("Card")
      const schoolIndexPageCardTitle = schoolIndexPage.find("CardTitle")
  
      expect(schoolIndexPageCard.length).toEqual(2)
      expect(schoolIndexPageCardTitle.length).toEqual(2)
    })
  })

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedReviewIndexPage from './ProtectedReviewIndexPage'

Enzyme.configure({ adapter: new Adapter() })

describe("When ProtectedReviewIndexPage renders", () => {
  it("displays all reviews created by current user", () => {

    let myReviews = []

    const protectedReviewIndexPage = shallow(<ProtectedReviewIndexPage review={myReviews}/>)
    const protectedReviewIndexPageHeading = protectedReviewIndexPage.find("h1")
    expect(protectedReviewIndexPageHeading.text()).toEqual("My Reviews")
  })
  it("displays a Card", () => {

    let myReviews = [{
      title: "My first review",
      date_posted: "January 10th",
      review_text: "What a great experience. I really recommend this school to everyone who has ever wanted to code. Thanks everyone involved.",
      user_id: 2,
      school_id: 5

  },
  {
      title: "Never again!!!!!",
      date_posted: "February 22nd",
      review_text: "I Grinded LEETcode for weeks and now I only know how to reverse binary trees in a hashmap recursive function!!",
      user_id: 1,
      school_id: 6
  }]
    let schools = []
    
    const protectedReviewIndexPage = shallow(<ProtectedReviewIndexPage review={myReviews} schools={schools}/>)
    const protectedReviewIndexPageCard = protectedReviewIndexPage.find("Card")
    const protectedReviewIndexPageCardTitle = protectedReviewIndexPage.find("CardTitle")
    const protectedReviewIndexPageCardText = protectedReviewIndexPage.find("CardText")
    const protectedReviewIndexButtons = protectedReviewIndexPage.find("Button")

    expect(protectedReviewIndexPageCard.length).toEqual(2)
    expect(protectedReviewIndexPageCardTitle.length).toEqual(2)
    expect(protectedReviewIndexPageCardText.length).toEqual(4)
    expect(protectedReviewIndexButtons.length).toEqual(4)
  })

})

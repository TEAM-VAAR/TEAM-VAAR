import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewIndexPage from './ReviewIndexPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewIndex renders", () => {
    it("displays a heading", () => {

      let reviews = [{
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



      const reviewIndexPage = shallow(<ReviewIndexPage reviews={reviews} />)
      const reviewIndexPageHeading = reviewIndexPage.find("h3")
      const reviewIndexPageCardTitle = reviewIndexPage.find("CardTitle")
      const reviewIndexPageCardText = reviewIndexPage.find("CardText")

      expect(reviewIndexPageHeading.text()).toEqual("Review Page")
      expect(reviewIndexPageCardTitle.length).toEqual(2)
      expect(reviewIndexPageCardText.length).toEqual(2)
      
    })
  })
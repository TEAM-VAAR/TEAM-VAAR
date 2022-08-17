import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShowReviewPage from './ShowReviewPage'
Enzyme.configure({ adapter: new Adapter() })

describe("When ShowReviewPage renders", () => {
  const review = {
    title: "My first review",
    date_posted: "January 10th",
    review_text: "What a great experience. I really recommend this school to everyone who has ever wanted to code. Thanks everyone involved.",
    user_id: 2,
    school_id: 5
    }
  
  let renderedReviewShow;

  beforeEach(() => {
    renderedReviewShow = shallow(<ShowReviewPage review={review} />);
  });

  it("displays one Card", () => {
    const reviewShowHeading = renderedReviewShow.find("Card")
    expect(reviewShowHeading.length).toEqual(1)
  })
})

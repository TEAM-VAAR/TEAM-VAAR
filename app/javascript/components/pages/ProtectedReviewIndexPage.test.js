
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedReviewIndexPage from './ProtectedReviewIndexPage'

Enzyme.configure({ adapter: new Adapter() })

describe("When ProtectedReviewIndexPage renders", () => {
  it("displays all reviews created by current user", () => {

    let myReviews = []
    let isLoading = "done"

    const protectedReviewIndexPage = shallow(<ProtectedReviewIndexPage review={myReviews} isLoading={isLoading}/>)
    const protectedReviewIndexPageHeading = protectedReviewIndexPage.find("h1")
    expect(protectedReviewIndexPageHeading.text()).toEqual("My Reviews")
  })
})
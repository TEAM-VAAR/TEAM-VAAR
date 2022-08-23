import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from "./NotFoundPage";

Enzyme.configure({adapter: new Adapter()})

describe("When Not Found Renders", () => {
    it("displays a header", () => {
        const notFound = shallow(<NotFound/>)
        const notFoundHeader = notFound.find("h1")
        expect(notFoundHeader.length).toEqual(1)

    })
})
class ReviewsController < ApplicationController
    def index
        reviews = Review.ApplicationController
        render json: reviews
    end
end
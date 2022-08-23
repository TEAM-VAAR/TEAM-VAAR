require 'rails_helper'

RSpec.describe "Reviews", type: :request do

  describe "GET /index" do
    it 'returns a list of reviews' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      school1 = School.create(name: "LEARN academy")

      review1 = Review.create(
        title: "My first review",
        date_posted: "January 10th",
        review_text: "What a great experience. I really recommend this school to everyone who has ever wanted to code. Thanks everyone involved.",
        user_id: user.id,
        school_id: school1.id
    )

   get '/reviews'

      reviews = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(reviews.length).to eq(1)
    end
  end
  end
require 'rails_helper'

RSpec.describe "Reviews", type: :request do

  describe "GET /index" do
    it 'returns a list of reviews' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      school1 = School.create(name: "LEARN academy")

      user.reviews.create(
        title: "My first review",
        date_posted: "January 10th",
        review_text: "What a great experience. I really recommend this school to everyone who has ever wanted to code. Thanks everyone involved.",
        user_id: user.id,
        school_id: school1.id
    )

      get '/reviews'
      review = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(review.length).to eq(1)
    end
  end

  describe "POST /create" do
    it "creates a new review" do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      school1 = School.create(name: "LEARN academy")

      review_params = {
        review: {
          title: "Test title",
          date_posted: "August 19, 2022",
          review_text: "Test review text",
          user_id: user.id,
          school_id: school1.id
        }
      }
      post '/reviews', params: review_params

      review = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(review['title']).to eq "Test title"
      expect(review['date_posted']).to eq "August 19, 2022"
      expect(review['review_text']).to eq "Test review text"
      expect(review['user_id']).to eq user.id
      expect(review['school_id']).to eq school1.id
    end
  end

  end
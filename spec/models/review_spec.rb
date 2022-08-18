require 'rails_helper'

RSpec.describe Review, type: :model do
  user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
  school = School.create(name: "LEARN Academy")
  
  it 'check that Review exists' do
    review = user.reviews.create title: "Review title", date_posted: "May 17, 2021", review_text: "text", school_id: school.id
    expect(review).to be_valid
  end

  it 'check that a title is inputted' do
    review = Review.create date_posted: "May 17, 2021", review_text: "Best place ever", user_id: 1, school_id: 1
    expect(review.errors[:title]).to_not be_empty
  end

  it 'check that a date_posted is inputted' do
    review = Review.create title: "Review title", review_text: "Best place ever", user_id: 1, school_id: 1
    expect(review.errors[:date_posted]).to_not be_empty
  end

  it 'check that a review_text is inputted' do
    review = Review.create title: "Review Title", date_posted: "May 17, 2021", user_id: 1, school_id: 1
    expect(review.errors[:review_text]).to_not be_empty
  end


end

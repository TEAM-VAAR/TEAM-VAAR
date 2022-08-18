require 'rails_helper'

RSpec.describe School, type: :model do
  # user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')

  it 'check that School exists' do
    School.create name: "LEARN Academy"
    school = School.first
    expect(school).to be_valid
  end

  it 'check that a school name is inputted' do
    school = School.create
    expect(school.errors[:name]).to_not be_empty
  end

end

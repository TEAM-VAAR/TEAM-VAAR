require 'rails_helper'

RSpec.describe "Schools", type: :request do

  describe "GET /index" do
    it 'returns a list of schools' do
    
      
  
   get '/schools'

      schools = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(schools.length).to match(19)
      expect(schools.first).to include({"name"=>"LEARN Academy"})
    end
  end

  describe "POST /create" do
    it "creates a new school" do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      # school1 = School.create(name: "LEARN academy")

      school_params = {
        school: {
          name: "Test School name",
        }
      }
      post '/schools', params: school_params

      school = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(school['name']).to eq "Test School name"
    end
  end

  end
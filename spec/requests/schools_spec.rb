require 'rails_helper'

RSpec.describe "Schools", type: :request do

  describe "GET /index" do
    it 'returns a list of schools' do
    
      school1 = School.create(name: "LEARN academy")
  
   get '/schools'

      schools = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(schools.length).to eq(1)
    end
  end
  end
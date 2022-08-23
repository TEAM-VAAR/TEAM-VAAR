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
  end
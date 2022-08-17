class SchoolsController < ApplicationController
    def index
        schools = School.ApplicationController
        render json: schools
    end
end
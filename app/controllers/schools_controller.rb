class SchoolsController < ApplicationController

    def index
        schools = School.all
        render json: schools
    end

    def create
        school = School.create(school_params)
        if school.valid?
            render json: school
        else
            render json: school.errors, status: 422
        end
    end

    private
    def school_params
        params.require(:school).permit(:name)
    end

end
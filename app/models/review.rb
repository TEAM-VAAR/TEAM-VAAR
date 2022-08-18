
class Review < ApplicationRecord
    belongs_to :user
    belongs_to :school

    validates :title, :date_posted, :review_text, presence: true
end
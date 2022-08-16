class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :date_posted
      t.text :review_text
      t.integer :user_id
      t.integer :school_id

      t.timestamps
    end
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: 'Agile_Ajay@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

user2 = User.create(email: 'Ruby_Expert54@test.test', password: '12345678', password_confirmation: '12345678')

user3 = User.create(email: 'surfer1992@test.test', password: '12345678', password_confirmation: '12345678')

user4 = User.create(email: 'Postgres_Petunia@test.test', password: '12345678', password_confirmation: '12345678')

school1 = School.create(name: "LEARN academy")

school2 = School.create(name: "Testing school")

school3 = School.create(name: "Super Coders")

school4 = School.create(name: "Virtual Programming")

school5 = School.create(name: "Caffeine Coders")

school6 = School.create(name: "LEET coders only")


review = [
    {
        title: "My first review",
        date_posted: "January 10th",
        review_text: "What a great experience. I really recommend this school to everyone who has ever wanted to code. Thanks everyone involved.",
        user_id: user2.id,
        school_id: school5.id

    },
    {
        title: "Never again!!!!!",
        date_posted: "February 22nd",
        review_text: "I Grinded LEETcode for weeks and now I only know how to reverse binary trees in a hashmap recursive function!!",
        user_id: User.first.id,
        school_id: school6.id
    },
    {
        title: "Finally real instruction!",
        date_posted: "May 17th",
        review_text: "After grinding leetcode and getting no where I decided to attend LEARN academy. I finally understand programming as a full stack web developer!",
        user_id: User.first.id,
        school_id: School.first.id
    },
    {
        title: "Coding beats surfing?",
        date_posted: "June 1st",
        review_text: "Surf all day, code all night!",
        user_id: user3.id,
        school_id: school3.id

    },
    {
        title: "test test test TEST",
        date_posted: "March 25th",
        review_text: "I learned how to test code at this school, now I make ONE MILLION DOLLARS A MONTH!",
        user_id: user4.id,
        school_id: school2.id

    }
]


review.each do |attribute|
    Review.create attribute
    puts "creating #{attribute}"
end

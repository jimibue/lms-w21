# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

s1 = Skill.create(name: "ruby", description: "Syntaz Sugar")
s2 = Skill.create(name: "rails", description: "Stay on the rails...Convention")
s3 = Skill.create(name: "react", description: "make writing UI noooice!!!")

# Skills could also be a homework with a grade
s4 = Skill.create(name: "Homework1", description: "CRUD ACTIONS!!")
s5 = Skill.create(name: "Homework2", description: "Cassino")

5.times do |i|
  puts i
  user = User.create(name: Faker::Name.name)

  Grade.create(user_id: user.id, skill_id: s1.id, score: rand(100))
  Grade.create(user_id: user.id, skill_id: s2.id, score: rand(100))
  Grade.create(user_id: user.id, skill_id: s3.id, score: rand(100))
  Grade.create(user_id: user.id, skill_id: s4.id, score: rand(100))
  Grade.create(user_id: user.id, skill_id: s5.id, score: rand(100))
end

puts Skill.all.length
puts User.all.length
puts Grade.all.length

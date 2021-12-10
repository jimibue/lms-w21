class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades
  has_many :enrollments
  has_many :courses, through: :enrollments
end

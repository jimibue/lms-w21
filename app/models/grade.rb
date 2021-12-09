class Grade < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  def self.all_and_then_some
    # SQL CALL HERE (NOT TODAY)

    # rails way

    # good old fashion ruby (bad way to do but works)
    grades = Grade.all
    grades.map do |grade|
      { id: grade.id, score: grade.score, user_name: grade.user.name, skill_name: grade.skill.name, user_id: grade.user.id, skill_id: grade.skill.id }
    end
  end
end

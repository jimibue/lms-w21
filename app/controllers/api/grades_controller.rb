class Api::GradesController < ApplicationController
  before_action :set_grade, only: [:show, :destroy, :update]

  def index
    # class method it is called on class
    render json: Grade.all_and_then_some

    #instance method called on instance of the class
    # grade = Grade.first
    # grade.all_and_then_some
  end

  def show
    render json: @grade
  end

  def create
    @grade = Grade.new(grade_params)
    if (@grade.save)
      render json: @grade
    else
      render json: { error: @grade.errors }, status: 422
    end
  end

  def update
    if (@grade.update(grade_params_update))
      render json: @grade
    else
      render json: { error: @grade.errors }, status: 422
    end
  end

  private

  def set_grade
    @grade = Grade.find(params[:id])
  end

  def grade_params
    params.require(:grade).permit(:score, :user_id, :skill_id)
  end

  def grade_params_update
    params.require(:grade).permit(:score)
  end
end

class Api::EnrollmentsController < ApplicationController
  before_action :set_enrollment, only: [:update, :destroy]

  def index
    render json: Enrollment.all
  end

  def create
    @enrollment = Enrollment.new(enrollment_params)
    if (@enrollment.save)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: 422
    end
  end

  def update
    if (@enrollment.update(enrollment_params))
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: 422
    end
  end

  def destroy
    render json: @enrollment.destroy
  end

  private

  def enrollment_params
    params.require(:enrollment).permit(:role, :user_id, :course_id)
  end

  def set_enrollment
    @enrollment = Enrollment.find(params[:id])
  end
end

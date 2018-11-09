class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show,:update]
  def index
    @users = Note.all
    render json: @users
  end
  def create
    @user = User.create(user_params)
    render json: @user, status: 201
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end
  def show
    render json: @user, status:200
  end

  private

  def user_params
    params.permit(:name, :email, :location, :bio)
  end

  def find_note
    @note = Note.find(params[:id])
  end
end

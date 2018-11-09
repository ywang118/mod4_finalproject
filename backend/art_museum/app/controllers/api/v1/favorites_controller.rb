class Api::V1::FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show,:update,:destroy]
  def index
    @favorites = Favorite.all
    render json: @favorites, status: 200
  end

  def create
    @favorite = Favorite.create(favorite_params)
    render json: @favorite, status: 201
  end

  def update
    @favorite.update(favorite_params)
    render json: @favorite, status: 200
  end

  def destroy
    favoriteId = @favorite.id
    @user.destroy
    render json: {message:"Zap! user deleted", favoriteId:favoriteId}
  end

  def show
    render json: @user, status: 200
  end

  private
  def favorite_params
    params.permit(:name)
  end

  def set_favorite
    @user = Favorite.find(params[:id])
  end
end

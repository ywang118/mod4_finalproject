class Api::V1::FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show,:update,:destroy]
  def index
    @favorites = Favorite.all
    render json: @favorites, status: 200
  end

  def create
    @favorite = Favorite.find_or_create_by(favorite_params)
    render json: @favorite, status: 201
  end

  def update
    @favorite.update(favorite_params)
    render json: @favorite, status: 200
  end

  def destroy
    favoriteId = @favorite.id
    @favorite.destroy
    render json: {message:"Zap! favorite deleted", favoriteId:favoriteId}
  end

  def show
    render json: @favorite, status: 200
  end

  private
  def favorite_params

    params.require(:favorite).permit(:artwork_id,:user_id, :note )
  end

  def set_favorite
    @favorite = Favorite.find(params[:id])
  end
end

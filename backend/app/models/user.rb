class User < ApplicationRecord
  has_many :favorites
  has_many :artworks, through: :favorites
end

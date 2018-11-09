class ArtworkSerializer < ActiveModel::Serializer
  attributes(*Artwork.attribute_names.map(&:to_sym))
  has_many :favorites
  has_many :users, through: :favorites
end

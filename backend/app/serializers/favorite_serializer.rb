class FavoriteSerializer < ActiveModel::Serializer
  attributes(*Favorite.attribute_names.map(&:to_sym))
  belongs_to :user
  belongs_to :artwork
end

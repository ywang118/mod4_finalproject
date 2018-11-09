class UserSerializer < ActiveModel::Serializer
  attributes(*User.attribute_names.map(&:to_sym))
  has_many :favorites
  has_many :artworks, through: :favorites
end

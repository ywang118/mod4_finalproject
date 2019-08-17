class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :img
      t.string :culture
      t.string :classification
      t.string :people
      t.string :division
      t.string :description
      t.string :diminsions
      t.string :dated
      t.string :accessionyear
      t.string :period
      t.string :medium

      t.timestamps
    end
  end
end

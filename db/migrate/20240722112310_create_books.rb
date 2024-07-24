class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.float :rating
      t.string :description

      t.timestamps
    end
  end
end

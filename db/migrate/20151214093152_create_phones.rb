class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end

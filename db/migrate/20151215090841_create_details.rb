class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
    	t.text  :characteristic
    	t.references :phone, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end

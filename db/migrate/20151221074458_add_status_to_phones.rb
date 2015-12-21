class AddStatusToPhones < ActiveRecord::Migration
  def change
  	add_column :phones, :status, :boolean, default: false
  end
end

class AddPhoneIdToAttachment < ActiveRecord::Migration
  def change
  	add_column :attachments, :phone_id, :integer
  	add_index :attachments, :phone_id
  end
end

class ConverAttachmentToPolymorphic < ActiveRecord::Migration
  def change
    remove_index :attachments, :phone_id
    rename_column :attachments, :phone_id, :attachmentable_id
    add_index :attachments, :attachmentable_id

    add_column :attachments, :attachmentable_type, :string
    add_index :attachments, :attachmentable_type
  end
end

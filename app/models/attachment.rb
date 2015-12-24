class Attachment < ActiveRecord::Base
	belongs_to :phone
	mount_uploader :file, FileUploader
end

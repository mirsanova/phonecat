# encoding: utf-8

class FileUploader < CarrierWave::Uploader::Base
  delegate :identifier, to: :file
  storage :file
  
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
  
  # def extension_white_list
  #   %w(jpg jpeg gif png)
  # end

  
  # def filename
  #   "something.jpg" if original_filename
  # end

end

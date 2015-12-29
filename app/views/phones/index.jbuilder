json.array! @phone do |phone|
	json.merge! phone.attributes  
  json.attachments phone.attachments
end
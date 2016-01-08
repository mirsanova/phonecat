class Phone < ActiveRecord::Base
	validates :name, :description, :attachments, presence: true
	has_one :detail, dependent: :destroy
	has_many :attachments, as: :attachmentable

	accepts_nested_attributes_for :detail, allow_destroy: true, reject_if: :all_blank
	accepts_nested_attributes_for :attachments

	def as_json(options={})
    super( include: [:detail])
	end
end

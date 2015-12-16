class Phone < ActiveRecord::Base
	validates :name, :description,  presence: true
	has_one :detail, dependent: :destroy

	accepts_nested_attributes_for :detail, allow_destroy: true, reject_if: :all_blank

	def as_json(options={})
    super( include: [:detail])
  end
end

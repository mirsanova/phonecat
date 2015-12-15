class Phone < ActiveRecord::Base
	has_one :detail, dependent: :destroy
end

class PhonesController < ApplicationController
	##before_action :get_phone, except: [:index, :create]
	respond_to :html, :json

	def index
    @phone = Phone.all
    respond_with(@phones) do |format|
      format.json { render :json => @phone.as_json }
      format.html
    end
  end

  def new
    @phone = Phone.new(phone_params)
  end

  def create
    @user = Phone.new(phone_params)
    if @phone.save
      render json: @phone.as_json, status: :ok
    else
      render json: {phone: @phone.errors, status: :no_content}
    end
  end

  def show
    respond_with(@phone.as_json)
  end


	private

  def phone_params
    params.require(:phone).permit(:name, :description)
  end

  def get_phone
    @phone = Phone.find(params[:id])
    render json: {status: :not_found} unless @phone
  end
	
end

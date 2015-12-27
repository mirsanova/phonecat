class PhonesController < ApplicationController
	before_action :get_phone, except: [:index, :create]
	respond_to :html, :json

	def index
    @phone = Phone.all
    respond_with(@phones) do |format|
      format.json { render :json => @phone.as_json }
      format.html
    end
  
  end

  # def new
  # 	@phone = Phone.new
  #   @phone.attachments.build
  # end

  def create
    byebug
    @phone = Phone.new(phone_params)

    if @phone.save
      render json: @phone.as_json, status: :ok
    else
      render json: {phone: @phone.errors, status: :no_content}
    end
  end

  def show
    respond_with(@phone.as_json)
  end

  def destroy
    @phone.destroy
    render json: {status: :ok}
  end

  def update
    @phone = Phone.find(params[:id])

    if @phone.update_attributes(phone_params)
      render json: @phone.as_json, status: :ok
    else
      render json: {phone: @phone.errors, status: :unprocessable_entity}
    end
    
  end

	private

  def phone_params
  	params['phone']['detail_attributes'] = params['phone']['detail']
    params.require(:phone).permit(:name, :description, :status, detail_attributes: [:characteristic], attachments_attributes: [:file])
  end

  def get_phone
    @phone = Phone.find(params[:id])
    render json: {status: :not_found} unless @phone
  end
	
end

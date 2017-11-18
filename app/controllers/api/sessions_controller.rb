class Api::SessionsController < ApplicationController
  def create
    # @user = User.find_by_credentials(
    #   user[:user][:username], 
    #   user[:user][:password]
    # )

    # if @user
    #   login(@user)
    #   render :show
    # else 
    #   render json: @user.errors.full_messages, status: 422
    # end 
  end

  def destroy
    if current_user
      logout! 
      render json: {}
    else 
      render json: {}, status: 404 
    end 
  end
end

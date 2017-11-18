class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :require_logged_in 

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end 

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end 

  def logged_in? 
    !current_user.nil? 
  end 

  def logout!
    session[:session_token] = nil 
    redirect_to new_api_session_url 
  end 

  def require_logged_in 
    redirect_to new_api_session_url unless logged_in? 
  end 
end

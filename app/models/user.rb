class User < ApplicationRecord

validates :username, :session_token, presence: true 
validates :password, length: {minimum: 6, allow_nil: true}

after_initialize :ensure_session_token 

attr_reader :password 

def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
end 

def valid_password?(password)
    pass_hash = BCrypt::Password.new(self.password_digest)
    pass_hash.is_password?(password)
end

def reset_session_token! 
    self.session_token = SecureRandom::urlsafe_base64(32)
    self.save 
    self.session_token
end

private 
def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
end 
end

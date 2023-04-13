validates :password, length: { in: 6..20 }
validates :email, uniqueness: true
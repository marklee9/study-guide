require_relative 'p05_hash_map'

def can_string_be_palindrome?(string) 
  hash = HashMap.new
  count = 0
  string.each_char do |ch|
     hash[ch] ? hash[ch] += 1 : hash[ch] = 1
  end
  hash.each do |key, val|
    if hash[key] % 2 == 1 
      count += 1
      return false if count == 2
    end
  end
  true
end

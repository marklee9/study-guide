class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    result = 0
    self.each_with_index do |el, i|
      result += (el * i).hash
    end
    result
  end
end

class String
  def hash
    result = 0
    alph = ("a".."z").to_a
    self.chars.each_with_index do |ch, i|
      result += ((alph.index(ch.downcase) + 1) * i).hash 
    end
    result 
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    k = self.keys
    result = 0
    k.each do |key|
      result += (key.to_s).hash + self[key].hash
    end
    result
  end
end
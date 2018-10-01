require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @capacity = 8
    @store = StaticArray.new(0)
    @length = 0
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if @store[index].nil? 
    @store[index]
  end

  # O(1)
  def []=(index, value)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length === 0
    val = @store[@length-1]
    @store[@length-1] = nil
    @length -= 1
    val
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if @length == @capacity
      @capacity = @capacity * 2
      resize!
    end
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    first = @store[0]
    result = StaticArray.new(@capacity)
    (@length - 1).times {|i| result[i] = @store[i + 1]}
    @store = result
    @length -= 1
    first
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length + 1 == @capacity 
    result = StaticArray.new(@capacity)
    @length.times {|i| result[i + 1] = @store[i]}
    result[0] = val
    @length += 1
    @store = result
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    result = StaticArray.new(@capacity)
    @length.times {|i| result[i] = @store[i]}
    @store = result
  end
end

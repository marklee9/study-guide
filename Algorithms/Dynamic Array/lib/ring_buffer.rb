require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @capacity = 8
    @store = StaticArray.new(0)
    @length = 0
    @start_idx = 0
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if @store[(@start_idx + index) % @capacity].nil? 
    @store[(@start_idx + index) % @capacity]
  end

  # O(1)
  def []=(index, val)
    @store[(@start_idx + index) % @capacity] = val
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    val = @store[(@start_idx + @length) % @capacity - 1]
    @store[(@start_idx + @length) % @capacity - 1] = nil
    @length -= 1
    val
  end

  # O(1) ammortized
  def push(val)
    if @length == @capacity
      @capacity = @capacity * 2
      resize!
    end
    @store[(@start_idx + @length) % @capacity] = val
    @length += 1
  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0
    result = @store[@start_idx]
    @store[@start_idx] = nil
    @start_idx = (@start_idx + 1) % @capacity
    @length -= 1
    result 
  end

  # O(1) ammortized
  def unshift(val)
    if @length == @capacity
      @capacity = @capacity * 2
      resize!
      @start_idx = (@start_idx - 1) % @capacity
      @store[@start_idx] = val
    else 
      @start_idx = (@start_idx - 1) % @capacity
      @store[@start_idx] = val
    end
    @length += 1  
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  def resize!
    result = StaticArray.new(@capacity)
    @length.times {|i| result[i] = @store[(@start_idx + i) % @length]}
    @store = result
    @start_idx = 0
  end
end

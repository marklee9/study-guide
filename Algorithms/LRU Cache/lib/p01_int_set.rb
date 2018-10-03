class MaxIntSet
  def initialize(max)
    @max = max
    @store = Array.new(max){false}
  end

  def insert(num)
    raise "Out of bounds" if num > @max || num < 0
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num unless include?(num)
  end

  def remove(num)
    self[num].delete(num) if include?(num)
  end

  def include?(num)
    self[num].each {|el| return true if el == num}
    return false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets
    self[num] << num unless include?(num)
    @count += 1
  end

  def remove(num)
    self[num].delete(num) if include?(num)
    @count -= 1
  end

  def include?(num)
    self[num].each {|el| return true if el == num}
    return false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    newStore = Array.new(num_buckets * 2) { Array.new }

    @store.each do |bucket|
      bucket.each do |el|
        newStore[el % newStore.length] << el
      end
    end

    @store = newStore
  end
end

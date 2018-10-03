require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  attr_reader :count
  include Enumerable

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    bucket(key).each {|node| return true if node.key == key}
    return false
  end

  def set(key, val)
    if include?(key)
      bucket(key).update(key, val)
    else 
      resize! if @count == num_buckets
      bucket(key).append(key, val)
      @count += 1 
    end
  end

  def get(key)
    bucket(key).get(key)
  end

  def delete(key)
    remove = bucket(key).remove(key)
    @count -= 1 if remove
    remove
  end

  def each(&prc)
    @store.each do |linkedList|
      linkedList.each do |node|
        prc.call(node.key, node.val)
      end
    end
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    newStore = Array.new(num_buckets * 2) { LinkedList.new }
    each do |key, val|
      newStore[key.hash % newStore.length].append(key, val)
    end
    @store = newStore
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    @store[key.hash % num_buckets]
  end
end

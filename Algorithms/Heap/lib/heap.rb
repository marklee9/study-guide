class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new(0)
    @prc = prc
  end

  def count
    @store.length
  end

  def extract
    last = @store.pop
    first = @store.shift
    @store.push(first).unshift(last)
    BinaryMinHeap.heapify_up(@store, count - 1) {|el1, el2| el2 <=> el1}
    popped = @store.pop
    BinaryMinHeap.heapify_down(@store, 0)
    popped
  end

  def peek
    @store.first
  end

  def push(val)
    @store << val
    if @store.length > 1 
      BinaryMinHeap.heapify_up(@store, count - 1, &prc)
    else
      @store
    end
  end

  public
  def self.child_indices(len, parent_index)
    first = (2 * parent_index) + 1
    second = (2 * parent_index) + 2
    if first > len - 1 
      return []
    elsif first == len - 1
      return [first]
    else 
      return [first, second]
    end
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new {|el1, el2| el1 <=> el2}
    child = BinaryMinHeap.child_indices(len, parent_idx)
    move = array[parent_idx]

    return array if child.length == 0
    
    if child.length == 1
      if prc.call(move, array[child[0]]) == 1
        array[parent_idx] = array[child[0]]
        array[child[0]] = move
        return array
      else 
      return array
      end
    end

    if array[child[0]] > array[child[1]]
      max, min = array[child[0]], array[child[1]]
      max_idx, min_idx = child[0], child[1]
    else 
      max, min = array[child[1]], array[child[0]]
      max_idx, min_idx = child[1], child[0]
    end
    
    if prc.call(move, min) == 1
      if move > min || move > max
        array[parent_idx] = min
        array[min_idx] = move
        BinaryMinHeap.heapify_down(array, min_idx, len, &prc)
      else 
        array[parent_idx] = max
        array[max_idx] = move
        BinaryMinHeap.heapify_down(array, max_idx, len, &prc)
      end
    else 
      BinaryMinHeap.heapify_down(array, parent_idx + 1, len, &prc)
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new {|el1, el2| el1 <=> el2}
    return array if child_idx == 0
    parent_idx = BinaryMinHeap.parent_index(child_idx)

    if array[parent_idx] > array[child_idx]
      if prc.call(array[parent_idx], array[child_idx]) == 1
        move = array[parent_idx]
        array[parent_idx] = array[child_idx]
        array[child_idx] = move
        BinaryMinHeap.heapify_up(array, parent_idx, len, &prc)
      else
        BinaryMinHeap.heapify_up(array, child_idx - 1, len, &prc)
      end
    else 
      if prc.call(array[parent_idx], array[child_idx]) == 1
        move = array[parent_idx]
        array[parent_idx] = array[child_idx]
        array[child_idx] = move
        BinaryMinHeap.heapify_up(array, parent_idx, len, &prc)
      else
        BinaryMinHeap.heapify_up(array, child_idx - 1, len, &prc)
      end
    end
  end
end

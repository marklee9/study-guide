require_relative "heap"

class Array
  def heap_sort!
    BinaryMinHeap.heapify_up(self, self.length - 1)
    BinaryMinHeap.heapify_down(self, 0)
    self[0], self[-1] = self[-1], self[0]

    i = self.length - 1
    while i > 0
      BinaryMinHeap.heapify_up(self, i)
      self[0], self[i] = self[i], self[0]
      i -= 1
    end
    self.reverse!
  end
end

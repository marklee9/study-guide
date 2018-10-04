require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  queue = Queue.new
  result = []

  # getting the vertex without in_edges.
  vertices.each { |vertex| queue << vertex if vertex.in_edges.empty? }


  until queue.empty?
    current = queue.shift

    if current.in_edges.empty?
      current.out_edges.each do |out_edge|
        queue << out_edge.to_vertex
        out_edge.destroy!
      end

      result << current
    else
      queue << current
    end
  end

  result
end

# def topological_sort(graph)
#   queue = []
#   graph.each do |vertex|
#     queue << vertex if vertex.in_edges.empty?
#   end

#   sorted_result = []
#   until queue.empty?
#     curr_vertex = queue.shift
#     curr_vertex.out_edges.reverse_each do |edge|
#       edge.destroy!
#     end
#     sorted_result << curr_vertex
#     graph.delete(curr_vertex)
#     graph.each do |vertex|
#       queue << vertex if vertex.in_edges.empty? && !queue.include?(vertex)
#     end
#   end
#   graph.length.zero? ? sorted_result : []
# end
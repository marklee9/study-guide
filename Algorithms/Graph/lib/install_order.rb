# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require 'graph'

def install_order(arr)
  order = []

  arr.each do |tuple|
    first = Vertex.new(tuple[0])
    second = Vertex.new(typle[1])
    
  end


  order
end

# def install_order(arr)
#   graph = []
#   max_id = 0
#   arr.each { |el| max_id = el.max if el.max > max_id }
#   max_id.times { |idx| graph << Vertex.new(idx + 1) }
#   arr.each do |el|
#     dependency = graph.select { |vertex| vertex.value == el[1] }
#     dependency = dependency[0]
#     package = graph.select { |vertex| vertex.value == el[0] }
#     package = package[0]
#     Edge.new(dependency, package)
#   end
#   topological_sort(graph).map { |vertex| vertex.value }
# end



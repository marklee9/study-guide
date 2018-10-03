class Vertex
  attr_reader :value
  attr_accessor :in_edges, :out_edges

  def initialize(value)
    @value = value
    @in_edges = [];
    @out_edges = [];
  end
end

class Edge
  attr_reader :from_vertex, :to_vertex, :cost

  def initialize(from_vertex, to_vertex, cost = 1)
    @from_vertex = from_vertex
    @to_vertex = to_vertex
    @cost = cost

    # add itself to to_vertex edges
    to_vertex.in_edges << self

    # add itself to from_vertex edges
    from_vertex.out_edges << self    
  end

  def destroy!
    # deleteing self(edge) from two vertices
    from_vertex.out_edges.delete(self)
    to_vertex.in_edges.delete(self)

    #set its vertices to nil
    @from_vertex = nil
    @to_vertex = nil
  end
end

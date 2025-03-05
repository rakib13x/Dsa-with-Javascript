class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

let myGraph = new Graph();
// let graph1 = myGraph.addVertex("A");
// let graph2 = myGraph.addVertex("B");
// let graph3 = myGraph.addEdge("A", "B");
// console.log(graph3);
// let graph4 = myGraph.addEdge("A", "C");
// console.log(graph4);
// let graph5 = myGraph.removeEdge("A", "B");
// console.log(graph5);
// console.log(myGraph);
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "D");
myGraph.removeVertex("D");

console.log(myGraph);

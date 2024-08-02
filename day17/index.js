class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

class LinkedList{
    constructor(head = null){
        this.head = new ListNode(head);
        this.size = 0;
    }
    print(){
        let curr = this.head;
        let arr = [];
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr.join('=>'));
    }
    add(val){
        let node = new ListNode(val);
        let curr = this.head;
        console.log(curr)
        while(curr.next){
            curr = curr.next;
        }
        curr.next = node;
        this.size++;
    }
    removeFromEnd(){
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
    }

}

const list = new LinkedList(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.print();
list.removeFromEnd();
list.removeFromEnd();
list.print();

// Implement a stack;

class Stack{
    constructor(){
        this.stk = [];
    }
    push(val){
        this.stk.push(val);
    }
    pop(){
        if(this.stk.length === 0) throw new Error("Stack is empty") 
        return this.stk.pop()
    }
    peek(){

        return this.stk[this.stk.length - 1]
    }
    reverseString(){
        if( (this.stk.length === 0)) return null;
        let rev = '';

        while(this.stk.length > 0) rev += this.pop();
        return rev;
    }
};
const stringStk = new Stack();
stringStk.push('a');
stringStk.push('b')
stringStk.push('c')
stringStk.push('d')
stringStk.push('e')
stringStk.push('f')
const revString = stringStk.reverseString()
console.log("reverse string is: ",revString);

// Queue 

class Queue {
    constructor(){
        this.q = [];
    }
    enqueue(val){
        let dummy = [];
        while(this.q.length > 0) dummy.push(this.q.pop());
        this.q.push(val);
        while(dummy.length > 0) this.q.push(dummy.pop());   
    }
    dequeue(){
        if(this.q.length ===  0) throw new Error("Operation invalid: queue is empty")
        return this.q.pop();
    }
    front(){
        return this.q[this.q.length -1]
    }
    print(){
        console.log(this.q);
    }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');
queue.print()
console.log(queue.dequeue());
console.log(queue.front());

// task 6 Use the Queue class ot simlulate a simple printer queue where print jobs are added to the queue and processed in order

const jobQueue = new Queue();

jobQueue.enqueue('paper 1')
jobQueue.enqueue('paper 2')
jobQueue.enqueue('paper 3')
jobQueue.enqueue('paper 4')
jobQueue.enqueue('paper 5')
jobQueue.print()
console.log(jobQueue.dequeue())
console.log(jobQueue.dequeue())
console.log(jobQueue.dequeue())
console.log(jobQueue.dequeue())
console.log(jobQueue.dequeue())


// binary three
class TreeNode {
    constructor(val = null){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(root=null){
        this.root = root
    }
    insert(val){
        const newNode = new TreeNode(val);
        if(this.root ===  null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode){
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrderTraversal(node, cb){
        if(node !== null){
            this.inOrderTraversal(node.left,cb);
            cb(node.val);
            this.inOrderTraversal(node.right,cb);
        }
    }
    print(){
        this.inOrderTraversal(this.root,(val)=>console.log(val))
    }

}

const binTree1 = new BinaryTree();
binTree1.insert(6);
binTree1.insert(7);

binTree1.insert(5);
binTree1.insert(8);
binTree1.insert(2);
binTree1.insert(3);
binTree1.insert(4);
binTree1.insert(9);
binTree1.print();


class Graph{
    constructor(adjacentList={}){
        this.adjacentList = adjacentList
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacentList[vertex2]) this.addVertex(vertex2);
        this.adjacentList[vertex1].push(vertex2); 
        this.adjacentList[vertex2].push(vertex1); 
    }
    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while(queue.length){
            const vertex = queue.shift();
            result.push(vertex);
            this.adjacentList[vertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
            
        }
        return result;
    }
    bfsShortestPath(start,end){
        if(start === end) return [start];

        const queue = [[start]];
        const visited = new Set();
        visited.add(start);
        
        while(queue.length){
            const path = queue.shift();
            const node = path[path.length - 1];

            for(let neighbor of this.adjacentList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    const newPath = path.concat(neighbor);
                    if(neighbor === end){
                        return newPath;
                    }
                    queue.push(newPath);
                }
            }
        }
        return null;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A','B') ; 
graph.addEdge('A','C') ; 
graph.addEdge('B','D') ; 
graph.addEdge('C','E') ; 
graph.addEdge('D','E') ; 

console.log(graph.bfs('A'));

const shortestPath = graph.bfsShortestPath('A', 'E');
console.log(`Shortest path between 'A' and 'E':`, shortestPath);
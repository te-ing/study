class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);

      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

function preorder(node) { // 전위순회
  console.log(node.value);
  if(node.left) preorder(node.left);
  if (node.right) preorder(node.right)
}

function inorder(node) { // 중위순회
  if(node.left) inorder(node.left);
  console.log(node.value);
  if (node.right) inorder(node.right)
}

function postorder(node) { // 후위순회
  if(node.left) postorder(node.left);
  if (node.right) postorder(node.right)
  console.log(node.value);
}

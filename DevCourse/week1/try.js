console.log("test");

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
   constructor() {
     this.root = new Node();
   }

   insert(string) { // 문자열 추가
     let currentNode = this.root;

     for (const char of string) {
     if (!currentNode.children.has(char)){ //  단어를 가지고 있는지 확인
      currentNode.children.set( // 해당노드가 없다면 추가
        char,
        new Node(currentNode.value + char) 
      );
      }
    
        currentNode = currentNode.children.get(char);
    }
  }

  has(string) { // 문자열이 존재하는지 확인
    let currentNode = this.root;

    for(const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  search(string) {
    let currentNode = this.root; 

    for(let i = 0; i <string.length ; i++) {
        const currentChar = string[i]; 
        if(currentNode.children[currentChar]){
            currentNode = currentNode.children[currentChar]; // 있으면 노드 이동
        } else {
            return ''
        }
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것. 
    return currentNode.value;
 }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("cry");
trie.insert("sad");
console.log(trie.search("cat"));


// console.log(trie.root.children.get("c"));
// console.log(trie.root.children.get("c").children.get());
// console.log(trie.root.children.get("c").children.get("a").children.get("t").value);


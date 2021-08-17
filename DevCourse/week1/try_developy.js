class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.end = false; // 단어 끝 확인
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
    currentNode.end = true;
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

  autoComplete(string){ // 재귀함수(search)를 이용한 자동완성
    if(!this.has(string)) return []; // 입력한 글자의 자동완성이 없을시 반환
    
    let currentNode = this.root;
    let word = [];
    
    for(let char of string){ // 입력한 글자의 노드로 이동
      currentNode = currentNode.children.get(char);
    }

    function search(word, node){ // 재귀함수를 이용해 마지막 노드까지 이동
      if(node.end){ // 자동완성 완료
        word.push(node.value)
        return;
      }
      else{
        for(let char of node.children){
          search(word, node.children.get(char[0]));
        }
      }
    }

    search(word, currentNode);
    return word;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("cry");
trie.insert("can");
trie.insert("not");
console.log(trie.autoComplete(""));
console.log("작동중..");

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

    for(const char of string) {
      if(currentNode.children.has(char)){
          currentNode = currentNode.children.get(char); // 있으면 노드 이동
        } else {
            return currentNode.children
        }
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것. 
    return currentNode.value;
 }
 allNode(){ // 모든 노드 출력
  let answer = "";
  let child = this.root.children
  
  function DFS(child) {
    if(![...child.keys()][0]){ // 노드가 없으면 종료
      return answer;
    }
    else{
      for(let i=0; i<[...child.keys()].length; i++){ // 가진 노드 수 만큼 순회
        answer += [...child.keys()][i];
        DFS(child = child.get([...child.keys()][i]).children); 
      }
    }
  }
  DFS(child);
  return answer;
 }
}


const trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("cry");
trie.insert("sad");
trie.insert("not");
console.log(trie.root.children); // Map(3) {"c" => Node, "s" => Node, "n" => Node}
console.log(trie.root.children.get("c").children); // Map(2) {"a" => Node, "r" => Node}
console.log(trie.root.children.get("c").children.get("a")); // Node {value: "ca", children: Map(2)}
console.log([...trie.root.children.keys()]); // (3) ["c", "s", "n"]

console.log(trie.allNode());
trie.allNode();
// console.log(auto("c"));
// console.log(trie.has("not"));
// console.log(trie.root.children.get("c"));

// console.log("saerch: "+trie.search("cat"));
// console.log(trie.root.children.get("c").children);


// console.log(trie.root.children.get("c").children)
// console.log([...trie.root.children.keys()]);

// console.log(trie.has("c"));

// if(trie.has(x))



// console.log(trie.root.children.get("c"));
// console.log(trie.root.children.get("c").children.get());
// console.log(trie.root.children.get("c").children.get("a").children.get("t").value);

// function tree(n) {
//   let answer = "";
//   function DFS(s) {
//     if(s>n){
//       return;
//     }
//     else{
//       answer += ` ${s}`; // 전위순회
//       DFS(s*2); // 왼쪽 정점
//       DFS(s*2+1); // 오른쪽 정점
//     }
//   }
//   DFS(1);
//   return answer
// }

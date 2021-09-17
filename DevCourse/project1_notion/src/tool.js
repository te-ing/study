export function docsTreeToArray(res) { 
  const tree = [];
  for(let i=0; i<res.length; i++) 
  search(res[i])
  function search(docs){
    if(docs.documents.length){
      tree.push(docs);
      for(let i=0; i<docs.documents.length; i++){
        search(docs.documents[i])
      }
    }
    else{
      tree.push(docs)
      return
    }
  }
  return tree
}

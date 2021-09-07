import DocumentList from "./DocumentList.js";
import Editor from "./Editor.js";
import { request, USERNAME } from "./api.js"

export default function App ({ $target }) {
  const documentList = new DocumentList({ 
    $target,
    initialState: []
   })

  const fetchDocumentList = async () => {
    const docList = await request(`/documents`)
    documentList.setState(docList)
  }
  fetchDocumentList()

}

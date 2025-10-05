
import RecursiveComponent from "./components/RecursiveComponent"
import { folderData } from "./data"

function App() {

  return (
    <div>
      <RecursiveComponent fileTree={folderData} />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/fileData'
import { insertNode } from './Hooks/use-add-node';

const App = () => {
  const [explorerData,setExplorerData] = useState(explorer);

  const handleInsertNode = (explorerId,name,isFileOrFolder) => {
    const finalTree = insertNode(explorerData,explorerId,name,isFileOrFolder);
    setExplorerData(finalTree);
  }

  return (
    <div>
        <Folder handleInsertNode={handleInsertNode} exp={explorer} />
    </div>
  )
}

export default App
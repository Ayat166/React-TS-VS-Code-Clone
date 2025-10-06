import { useState } from "react";
import type { IData } from "../interfaces";
import VsCodeIcon from "./SVG/VsCodeIcon";
interface RecursiveComponentProps {
  fileTree: IData;
}
function RecursiveComponent({ fileTree }: RecursiveComponentProps) {
  const [isOpen,setIsOpen]=useState<boolean>(false);

  // Handler
  const toggleIconFolder = () => setIsOpen(prev => !prev);
  return (
    <div className="pl-4 py-1">
      <div className="flex items-center hover:bg-gray-800 cursor-pointer" onClick={toggleIconFolder}>
        
        
        <span className="mr-2">
          <VsCodeIcon fileName={fileTree.name} isOpen={isOpen} isFolder={fileTree.isFolder}/>
        </span>
    
        <span>{fileTree.name}</span>
      </div>
      {isOpen && fileTree.children &&
        fileTree.children.map((file, index) => (
          <RecursiveComponent key={index} fileTree={file} />
        ))}
    </div>
  );
}

export default RecursiveComponent;

import { useState } from "react";
import type { IData } from "../interfaces";
import FileIcon from "./SVG/file";
import FolderIcon from "./SVG/folder";
import RightIcon from "./SVG/RightIcon";
import DownIcon from "./SVG/DownIcon";
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
        {fileTree.isFolder ? (
          <>
            {isOpen ? <DownIcon /> : <RightIcon />}
            <span className="mr-2">
              <FolderIcon />
            </span>
          </>
        ) : (
          <span className="mr-2">
            <FileIcon />
          </span>
        )}

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

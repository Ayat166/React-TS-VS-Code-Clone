import { iconMap } from "../../constants";
import { svgStyle } from "../../styles";
import DownIcon from "./DownIcon";
import RightIcon from "./RightIcon";


interface VsCodeIconProps {
  fileName: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

function VsCodeIcon({ fileName, isOpen, isFolder }: VsCodeIconProps) {
  const lowerName = fileName.toLowerCase();
  let iconFile = "";
  
  if (isFolder) {
    const baseName = iconMap[`${lowerName}_folder`] || "default_folder";
    iconFile = `${baseName}${isOpen ? "_opened.svg" : ".svg"}`;
  } else {
    if (iconMap[lowerName]) {
      iconFile = iconMap[lowerName]+ ".svg";
    } else {
      const parts = lowerName.split(".");
      const ext =
        parts.length > 2 ? parts.slice(-2).join("_") : parts.pop() || "";

      iconFile = iconMap[ext] + ".svg" || iconMap[parts.pop() || ""]+".svg" || "default_file.svg";
    }
  }

  const iconPath = `/icons/${iconFile}`;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = isFolder
      ? "/icons/default_folder.svg"
      : "/icons/default_file.svg";
  };

  return (
    <div className="flex items-center">
      {isFolder ? (isOpen ? <DownIcon /> : <RightIcon />) : null}
      <img src={iconPath} alt={fileName} {...svgStyle} onError={handleError} />
    </div>
  );
}

export default VsCodeIcon;

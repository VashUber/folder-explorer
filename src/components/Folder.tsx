import { useState } from "react";
import { FolderI } from "~/types";
import { File } from "./File";
import { FolderIcon } from "~/icons/FolderIcon";
import { FolderOpenIcon } from "~/icons/FolderOpenIcon";
import cn from "classnames";

type FolderPropsT = {
  folder: FolderI;
};

export const Folder = ({ folder }: FolderPropsT) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={toggleIsOpen}
      >
        {isOpen ? <FolderOpenIcon /> : <FolderIcon />}
        {folder.name}
        <button>add</button>
      </div>

      <div className={cn("pl-6", isOpen ? "" : "max-h-0 overflow-hidden")}>
        {folder.data.map((item) => {
          if (item.type === "file")
            return <File name={item.name} key={item.name} />;

          return <Folder folder={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};

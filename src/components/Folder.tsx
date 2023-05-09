import { KeyboardEvent, memo, useLayoutEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";
import { FolderI } from "~/types";
import { File } from "./File";
import { FolderIcon } from "~/icons/FolderIcon";
import { FolderOpenIcon } from "~/icons/FolderOpenIcon";
import { folderStructure } from "~/store/fs";

type FolderPropsT = {
  folder: FolderI;
};

export const Folder = memo(
  observer(({ folder }: FolderPropsT) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [newElementName, setNewElementName] = useState("");

    const newElementInputRef = useRef(null! as HTMLInputElement);

    const onBlur = () => {
      setNewElementName("");
      setIsAddClicked(false);
    };

    const toggleIsOpen = () => {
      setIsOpen((prev) => !prev);
    };

    const onAddBtnClick = () => {
      setIsAddClicked(true);
      setIsOpen(true);
    };

    useLayoutEffect(() => {
      if (isAddClicked === false) return;

      newElementInputRef.current.focus();
    }, [isAddClicked]);

    const addToFs = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;

      if (newElementName.includes(".")) {
        folderStructure.addToFs(folder, {
          name: newElementName,
          type: "file",
        });
      } else {
        folderStructure.addToFs(folder, {
          name: newElementName,
          type: "folder",
          data: [],
        });
      }

      setNewElementName("");
    };

    return (
      <div>
        <div className="flex items-center gap-1">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleIsOpen}
          >
            {isOpen ? <FolderOpenIcon /> : <FolderIcon />}
            {folder.name}
          </div>
          <button onClick={onAddBtnClick}>add</button>
        </div>

        <div className={cn("pl-6", isOpen ? "" : "max-h-0 overflow-hidden")}>
          {folder.data.map((item) => {
            if (item.type === "file")
              return <File name={item.name} key={item.name} />;

            return <Folder folder={item} key={item.name} />;
          })}

          {isAddClicked && (
            <input
              type="text"
              className="border border-gray-400 outline-none px-4 py-2 h-8 rounded-md"
              onKeyDown={addToFs}
              onBlur={onBlur}
              ref={newElementInputRef}
              value={newElementName}
              onChange={(e) => setNewElementName(e.target.value)}
            />
          )}
        </div>
      </div>
    );
  })
);

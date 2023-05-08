import { FolderI } from "~/types";
import { File } from "./File";
import { FolderIcon } from "~/icons/FolderIcon";

type FolderPropsT = {
  folder: FolderI;
};

export const Folder = ({ folder }: FolderPropsT) => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <FolderIcon />
        {folder.name}
      </div>

      <div className="pl-4">
        {folder.data.map((item) => {
          if (item.type === "file") return <File name={item.name} key={item.name} />;

          return <Folder folder={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};

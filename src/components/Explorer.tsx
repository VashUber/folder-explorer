import { FolderStructureT } from "~/types";
import { Folder } from "./Folder";
import { File } from "./File";

type ExplorerPropsT = {
  fs: FolderStructureT;
};

export const Explorer = ({ fs }: ExplorerPropsT) => {
  return (
    <div>
      {fs.map((item) => {
        if (item.type === "file") return <File name={item.name} key={item.name} />;

        return <Folder folder={item} key={item.name} />;
      })}
    </div>
  );
};

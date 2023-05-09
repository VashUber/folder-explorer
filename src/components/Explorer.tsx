import { Folder } from "./Folder";
import { File } from "./File";
import { folderStructure } from "~/store";
import { observer } from "mobx-react-lite";

export const Explorer = observer(() => {
  return (
    <div>
      {folderStructure.fs.map((item) => {
        if (item.type === "file") return <File name={item.name} key={item.name} />;

        return <Folder folder={item} key={item.name} />;
      })}
    </div>
  );
});

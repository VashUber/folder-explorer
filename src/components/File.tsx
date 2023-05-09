import { FileIcon } from "~/icons/FileIcon";

type FilePropsT = {
  name: string;
};

export const File = ({ name }: FilePropsT) => {
  return (
    <div className="flex items-center gap-1">
      <FileIcon />
      {name}
    </div>
  );
};

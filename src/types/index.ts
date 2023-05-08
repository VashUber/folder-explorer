export interface FileI {
  name: string;
  type: "file";
}

export interface FolderI {
  name: string;
  type: "folder";
  data: (FolderI | FileI)[];
}

export type FolderStructureT = (FolderI | FileI)[];

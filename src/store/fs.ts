import { makeAutoObservable } from "mobx";
import initial from "~/data/init.json";
import { FileI, FolderI, FolderStructureT } from "~/types";

const fs = initial as FolderStructureT;

class FolderStructure {
  fs = fs;

  constructor() {
    makeAutoObservable(this);
  }

  addToFs(node: FolderI, val: FolderI | FileI) {
    node.data.push(val);
  }
}

export const folderStructure = new FolderStructure();

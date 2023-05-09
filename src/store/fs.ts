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
    node.data.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
  }
}

export const folderStructure = new FolderStructure();

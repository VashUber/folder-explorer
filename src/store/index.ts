import { makeAutoObservable } from "mobx";
import initial from "~/data/init.json";
import { FolderStructureT } from "~/types";

const fs = initial as FolderStructureT;

class FolderStructure {
  fs = fs;

  constructor() {
    makeAutoObservable(this);
  }
}

export const folderStructure = new FolderStructure();

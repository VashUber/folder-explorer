import initial from "~/data/init.json";
import { FolderStructureT } from "~/types";
import { Explorer } from "~/components/Explorer";

const fs = initial as FolderStructureT;

export default function App() {
  return (
    <div className="p-4">
      <div className="text-2xl text-center">Folder explorer</div>

      <Explorer fs={fs} />
    </div>
  );
}

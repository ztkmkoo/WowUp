import { CurseReleaseType } from "./curse-release-type";
import { CurseDependency } from "./curse-dependency";
import { CurseModule } from "./curse-module";
import { CurseSortableGameVersion } from "./curse-sortable-game-version";

export interface CurseFile {
  id: number;
  displayName: string;
  fileName: string;
  fileDate: string;
  fileLength: number;
  releaseType: CurseReleaseType;
  fileStatus: number;
  downloadUrl: string;
  isAlternate: boolean;
  alternateFileId: number;
  isAvailable: boolean;
  dependencies: CurseDependency[];
  modules: CurseModule[];
  packageFingerprint: number;
  gameVersion: string[];
  sortableGameVersion: CurseSortableGameVersion[];
  installMetadata: any;
  changelog: any;
  hasInstallScript: boolean;
  isCompatibleWithClient: boolean;
  categorySectionPackageType: number;
  restrictProjectFileAccess: number;
  projectStatus: number;
  renderCacheId?: number;
  fileLegacyMappingId: any;
  projectId: number;
  parentProjectFileId?: number;
  parentFileLegacyMappingId: any;
  fileTypeId?: number;
  exposeAsAlternative: any;
  packageFingerprintId: number;
  gameVersionDateReleased: string;
  gameVersionMappingId: number;
  gameVersionId: number;
  gameId: number;
  isServerPack: boolean;
  serverPackFileId?: number;
  gameVersionFlavor: string;
}
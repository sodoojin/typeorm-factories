import * as glob from "glob";
import * as path from "path";

// const factories = this.provider.loadFiles(["**/*.factory{.js,.ts}"]);
// this.provider.importFiles(factories);

export class FactoryProvider {
  loadFiles(filePattern: string[]): string[] {
    return filePattern
      .map(pattern => glob.sync(path.join(process.cwd(), pattern)))
      .reduce((acc, filePath) => acc.concat(filePath), []);
  }

  importFiles(filePaths: string[]) {
    return filePaths.forEach(require);
  }
}

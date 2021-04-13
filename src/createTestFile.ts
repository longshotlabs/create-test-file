import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export default function createTestFile(
  sourceFilePath: string,
  shouldOpen: boolean = true
) {
  if (sourceFilePath.indexOf(".test.") > -1) return;

  const isDirectory = fs.lstatSync(sourceFilePath).isDirectory();
  if (isDirectory) {
    fs.readdirSync(sourceFilePath).forEach((file) => {
      createTestFile(path.join(sourceFilePath, file), false);
    });
    return;
  }

  let testFilePath: string;
  if (sourceFilePath.endsWith(".js")) {
    testFilePath = `${sourceFilePath.slice(0, -3)}.test.js`;
  } else if (sourceFilePath.endsWith(".jsx")) {
    testFilePath = `${sourceFilePath.slice(0, -4)}.test.jsx`;
  } else if (sourceFilePath.endsWith(".ts")) {
    testFilePath = `${sourceFilePath.slice(0, -3)}.test.ts`;
  } else if (sourceFilePath.endsWith(".tsx")) {
    testFilePath = `${sourceFilePath.slice(0, -4)}.test.tsx`;
  } else if (sourceFilePath.endsWith(".mjs")) {
    testFilePath = `${sourceFilePath.slice(0, -4)}.test.mjs`;
  } else {
    return;
  }

  fs.writeFileSync(testFilePath, "");

  if (shouldOpen) {
    vscode.workspace.openTextDocument(testFilePath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  }
}

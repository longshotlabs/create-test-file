import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export default function createTestFile(sourceFilePath: string, shouldOpen: boolean = true) {
  if (sourceFilePath.indexOf('.test.') > -1) return;

  const isDirectory = fs.lstatSync(sourceFilePath).isDirectory();
  if (isDirectory) {
    fs.readdirSync(sourceFilePath).forEach(file => {
      createTestFile(path.join(sourceFilePath, file), false);
    });
    return;
  }

  let testFilePath;
  if (sourceFilePath.endsWith('.js')) {
    testFilePath = `${sourceFilePath.slice(0, -3)}.test.js`;
  } else if (sourceFilePath.endsWith('.jsx')) {
    testFilePath = `${sourceFilePath.slice(0, -4)}.test.jsx`;
  } else {
    return;
  }

  fs.writeFileSync(testFilePath, '');

  if (shouldOpen) {
    vscode.workspace.openTextDocument(testFilePath).then(doc => {
      vscode.window.showTextDocument(doc);
    });
  }
}

# Create Test File: A Visual Studio Code (vscode) Extension

Adds a "Create Test File" option to the menu that shows when you right-click a file or folder in VSCode.

## Features

When you right-click a `.js` or `.jsx` or `.ts` or `.tsx` or `.mjs` file and choose "Create Test File", it will create a matching `.test.<extension>` file in the same folder.

When you right-click a folder containing such files and choose "Create Test File", it will create a matching `.test.<extension>` file for every file in that folder.

## Install

Clone this repo, change to the created directory, and then:

```sh
code --install-extension create-test-file-1.1.0.vsix
```

## Install From Local (if you made changes)

```sh
npm install -g vsce
vsce package
code --install-extension create-test-file-1.1.0.vsix
```

## Requirements

None

## Extension Settings

None

## Questions

_Can I configure it to use `.tests.` or `.spec.` or \_\_?_

No

# Positron Notebook Selection Runner

Run selected code directly in the active Positron Notebook runtime session.

This extension adds one command:

- `Positron Notebook Selection Runner: Run Selection in Positron Notebook Session`

When you select code inside a Positron Notebook cell, the command sends the selected code directly to the active Positron runtime session. It does not create, execute, or delete temporary notebook cells.

This extension is scoped to the Positron Notebook editor. It is not intended for the legacy/default Jupyter notebook editor.

## Features

- Runs the current editor selection in the active Positron Notebook runtime session.
- Keeps notebook contents unchanged; no temporary cells are inserted or deleted.
- Adds an `F9` keybinding for Positron Notebook editors on macOS, Windows, and Linux.

## Requirements

- Positron 2026.06.0 or newer.
- An active Positron Notebook runtime session.

## Usage

1. Open a Positron Notebook.
2. Start or connect to the notebook runtime session.
3. Select code inside a notebook cell.
4. Run `Positron Notebook Selection Runner: Run Selection in Positron Notebook Session` from the Command Palette, or press `F9`.

On macOS, press `fn+F9` if your keyboard uses the function row for system controls.

User keybindings in Positron override this extension's default keybinding.

## Develop and Test

1. Open this folder in Positron.
2. Run `npm install`.
3. Press `F5`, or open Run and Debug and choose `Run Extension in Positron`.
4. In the Extension Development Host window, enable and open a Positron Notebook.
5. Select code inside a cell.
6. Run `Positron Notebook Selection Runner: Run Selection in Positron Notebook Session` from the Command Palette.

The default keybinding is `F9` on macOS, Windows, and Linux.

Positron Notebook uses `Cmd+Enter` on macOS and `Ctrl+Enter` on Windows/Linux to run the whole active cell, so this extension keeps `F9` across platforms to avoid taking over the whole-cell shortcut.

If that conflicts with Positron's native notebook shortcuts, change the keybinding in `package.json`.

## Build a VSIX

After `npm install`, run:

```sh
npm run compile
npm run package
```

Install the generated `.vsix` in Positron with:

```sh
/Applications/Positron.app/Contents/Resources/app/bin/code --install-extension positron-notebook-selection-runner-0.0.8.vsix --force
```

You can also install a VSIX from Positron's Extensions view.

## Publish

Positron uses Open VSX-compatible extension metadata. To publish this extension for public installation, create an Open VSX account, claim or create the `jianzhaobi` namespace, generate an access token, then publish the packaged VSIX with `ovsx`.

```sh
npx ovsx publish positron-notebook-selection-runner-0.0.8.vsix -p <open-vsx-token>
```

## License

MIT

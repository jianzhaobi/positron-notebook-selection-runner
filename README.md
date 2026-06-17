# Positron Notebook Selection Runner

Run selected code directly in the active Positron Notebook runtime session.

This extension adds one command for Positron Notebooks:

- `Positron Notebook Selection Runner: Run Selection in Positron Notebook Session`

When you select code inside a Positron Notebook cell, the command sends only that selection to the active Positron runtime session. It does not create, execute, or delete temporary notebook cells, so your notebook contents stay unchanged.

This extension is scoped to the Positron Notebook editor. It is not intended for the legacy/default Jupyter notebook editor.

## Features

- Runs the current editor selection in the active Positron Notebook runtime session.
- Keeps notebook contents unchanged; no temporary cells are inserted or deleted.
- Adds an `F9` keybinding while a Positron Notebook cell editor has focus.
- Works from the Command Palette if you prefer not to use a keyboard shortcut.

## Requirements

- Positron 2026.06.0 or newer.
- An active Positron Notebook runtime session.

## Usage

1. Open a Positron Notebook.
2. Start or connect to the notebook runtime session.
3. Select code inside a notebook cell.
4. Run `Positron Notebook Selection Runner: Run Selection in Positron Notebook Session` from the Command Palette, or press `F9`.

On macOS, press `fn+F9` if your keyboard uses the function row for system controls.

## Changing the Keybinding

If `F9` conflicts with another shortcut, you can replace it with your own keybinding:

1. Open the Command Palette.
2. Run `Preferences: Open Keyboard Shortcuts`.
3. Search for `Run Selection in Positron Notebook Session`.
4. Select the edit icon next to the command.
5. Press the key combination you want to use, then confirm it.

Your Positron keybindings override this extension's default `F9` shortcut.

If you prefer editing keybindings as JSON, use this command ID:

```json
{
  "key": "f9",
  "command": "positronNotebookSelectionRunner.runSelectionInNotebookSession",
  "when": "positronNotebookCellEditorFocused"
}
```

Replace `f9` with the shortcut you want.

## Troubleshooting

- If nothing runs, make sure a Positron Notebook runtime session is started or connected.
- If the command is unavailable, make sure the active editor is a Positron Notebook, not the legacy/default Jupyter notebook editor.
- If `F9` does not work on macOS, try `fn+F9` or assign a different keybinding.

## License

MIT

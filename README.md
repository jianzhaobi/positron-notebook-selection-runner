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

## License

MIT

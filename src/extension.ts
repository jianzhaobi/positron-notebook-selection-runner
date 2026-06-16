import * as positron from "positron";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "positronNotebookSelectionRunner.runSelectionInNotebookSession",
    runSelectionInNotebookSession
  );

  context.subscriptions.push(disposable);
}

async function runSelectionInNotebookSession() {
  const positronConfig = vscode.workspace.getConfiguration("positron");
  if (positronConfig.get<boolean>("notebook.enabled") === false) {
    return;
  }

  const notebookEditor = vscode.window.activeNotebookEditor;
  const textEditor = vscode.window.activeTextEditor;

  if (!notebookEditor) {
    vscode.window.showWarningMessage("Open a Positron Notebook and select code in a cell first.");
    return;
  }

  if (!textEditor || textEditor.selection.isEmpty) {
    vscode.window.showWarningMessage("Select code inside a Positron Notebook cell first.");
    return;
  }

  const selectedCode = textEditor.document.getText(textEditor.selection);
  if (!selectedCode.trim()) {
    vscode.window.showWarningMessage("The current selection is empty.");
    return;
  }

  const languageId = textEditor.document.languageId || "python";

  try {
    await positron.runtime.executeCode(
      languageId,
      selectedCode,
      false,
      true,
      undefined,
      undefined,
      undefined,
      undefined,
      textEditor.document.uri
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    vscode.window.showErrorMessage(`Could not run selection in Positron Notebook session: ${message}`);
  }
}

export function deactivate() {}

declare module "positron" {
  import * as vscode from "vscode";

  export interface RuntimeSessionMetadata {
    readonly sessionId: string;
    readonly notebookUri?: vscode.Uri;
  }

  export interface LanguageRuntimeMetadata {
    readonly languageId: string;
  }

  export interface LanguageRuntimeSession {
    readonly metadata: RuntimeSessionMetadata;
    readonly runtimeMetadata: LanguageRuntimeMetadata;
  }

  export namespace runtime {
    export function executeCode(
      languageId: string,
      code: string,
      focus: boolean,
      allowIncomplete?: boolean,
      mode?: unknown,
      errorBehavior?: unknown,
      observer?: unknown,
      sessionId?: string,
      documentUri?: vscode.Uri,
      executionMetadata?: Record<string, unknown>
    ): Thenable<Record<string, unknown>>;

    export function getNotebookSession(notebookUri: vscode.Uri): Thenable<LanguageRuntimeSession | undefined>;
  }
}

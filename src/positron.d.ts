declare module "positron" {
  import * as vscode from "vscode";

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
  }
}

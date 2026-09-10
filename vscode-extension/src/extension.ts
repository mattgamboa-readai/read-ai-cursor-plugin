import * as vscode from 'vscode';

const PROVIDER_ID = 'readai.mcp';
const MCP_URL = 'https://api.read.ai/mcp';

export function activate(context: vscode.ExtensionContext): void {
  const didChangeEmitter = new vscode.EventEmitter<void>();

  context.subscriptions.push(didChangeEmitter);

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, {
      onDidChangeMcpServerDefinitions: didChangeEmitter.event,
      provideMcpServerDefinitions: async () => {
        return [
          new vscode.McpHttpServerDefinition(
            'Read AI',
            vscode.Uri.parse(MCP_URL),
            {},
            '1.0.0',
          ),
        ];
      },
      resolveMcpServerDefinition: async (server: vscode.McpServerDefinition) => {
        // OAuth is handled by VS Code against the remote MCP (DCR). No API key prompt.
        return server;
      },
    }),
  );
}

export function deactivate(): void {}

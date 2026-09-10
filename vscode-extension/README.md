# Read AI for VS Code

Connect [VS Code](https://code.visualstudio.com/) Copilot Chat (agent mode) to [Read AI](https://www.read.ai)’s hosted MCP server.

Bring meeting transcripts, summaries, action items, and reports into Copilot so agents can ground work in what your team actually discussed.

## What you get

- **MCP URL:** `https://api.read.ai/mcp`
- **Transport:** Streamable HTTP
- **Auth:** OAuth 2.1 with your Read AI account (same hosted server used by Claude, ChatGPT, and Cursor)

This extension is a thin Marketplace wrapper. It registers the remote MCP server with VS Code; tool implementations live on Read AI’s servers.

## Install

1. Install **Read AI** from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) (once published), or sideload the `.vsix`.
2. Open Copilot Chat → Agent mode.
3. When prompted, complete OAuth with your Read AI account.
4. Confirm tools appear (e.g. `list_meetings`, `get_meeting_by_id`).

You can also install via URL without the extension:

`vscode:mcp/install?%7B%22name%22%3A%22read-ai%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.read.ai%2Fmcp%22%7D`

## Requirements

- VS Code 1.101+ (MCP HTTP provider APIs)
- A Read AI account
- Copilot Chat with agent mode enabled

## Privacy

Read AI respects existing meeting and workspace permissions. See [Read AI’s MCP help article](https://support.read.ai/hc/en-us/articles/49381158409491-MCP-Server).

## Support

- Help: [MCP Server](https://support.read.ai/hc/en-us/articles/49381158409491-MCP-Server)
- Issues: [GitHub](https://github.com/Read-AI-Inc/read-ai-cursor-plugin/issues)
- Site: [https://www.read.ai](https://www.read.ai)

## License

MIT

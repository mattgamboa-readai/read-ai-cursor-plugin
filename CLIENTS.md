# Client packaging on this branch

Hosted MCP: `https://api.read.ai/mcp` (Streamable HTTP, OAuth).

| Client | Path on this PR |
| --- | --- |
| **VS Code / Copilot** | [`vscode-extension/`](./vscode-extension/) — Marketplace extension registering the remote MCP |
| **Slackbot MCP Client** | [`slackbot/`](./slackbot/) — wire the same URL into the existing Slack Marketplace app (`mcp_servers` + `mcp:connect`) |

Broader multi-client install kits (Cline, Replit, Windsurf, registry) live on PR #1 — keep that scope separate.

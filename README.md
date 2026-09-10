# Read AI for Cursor

Official Cursor plugin for [Read AI](https://www.read.ai)’s remote MCP server.

Bring meeting transcripts, summaries, action items, and reports into Cursor so agents can ground work in what your team actually discussed.

## What it connects

- **MCP URL:** `https://api.read.ai/mcp`
- **Transport:** Streamable HTTP
- **Auth:** OAuth 2.1 with your Read AI account (same hosted server used by Claude and ChatGPT)

This plugin is a thin marketplace wrapper. Tool implementations live on Read AI’s hosted MCP — Cursor does not run a local copy of the server.

## Tools (hosted)

- `list_meetings` — browse your meetings
- `get_meeting_by_id` — fetch a meeting report / transcript details
- `create_meeting_agent` — create a meeting agent session
- `share_meeting_report` — share a meeting report

Exact tool availability follows the live server.

## Install

1. Install **Read AI** from the [Cursor Marketplace](https://cursor.com/marketplace) (once listed).
2. Connect / authorize when prompted and sign in with your Read AI account.
3. Ask Cursor about a recent meeting, action items, or to draft work from a transcript.

You can also add the remote server manually while the listing is in review:

```json
{
  "mcpServers": {
    "read-ai": {
      "url": "https://api.read.ai/mcp"
    }
  }
}
```

## Requirements

- A Read AI account
- For workspace data: workspace settings that allow downloads / report access as documented by Read AI

## Support

- Help center: [MCP Server](https://support.read.ai/hc/en-us/articles/49381158409491-MCP-Server)
- Site: [https://www.read.ai](https://www.read.ai)

## License

MIT

## Other clients

Install kits for Cline, VS Code, Replit, Windsurf, and the GitHub/MCP Registry: see [CLIENTS.md](./CLIENTS.md).

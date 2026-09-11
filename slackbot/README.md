# Slackbot MCP Client

Connect Read AI’s hosted MCP (`https://api.read.ai/mcp`) to Slackbot via the existing Read AI Slack app.

This is Slack’s **MCP Client** (Slackbot calls our tools). It is separate from Slack’s MCP Server (`mcp.slack.com`), which exposes Slack data to other clients. A Marketplace app listing alone does not enable Slackbot MCP.

## Setup

1. Open the Read AI Slack app → **Features → MCP Servers**
2. Add server:
   - Name: `Read AI`
   - URL: `https://api.read.ai/mcp`
   - Auth: Dynamic Client Registration (or Manual OAuth with redirect `https://oauth2.slack.com/external/auth/callback`)
3. Ensure bot scope `mcp:connect` (optional when the app has other primary features)
4. Install to a test workspace → **Fetch Tools** → in Slackbot, **Apps** → add Read AI → OAuth → try a meeting question

Manifest fragment: [`app-manifest.mcp.snippet.json`](./app-manifest.mcp.snippet.json)

Official Slack docs: [Slackbot MCP Client](https://docs.slack.dev/ai/slackbot-mcp-client) · [Marketplace distribution](https://docs.slack.dev/ai/slackbot-mcp-client/distributing)

# Install Read AI MCP (for agents)

Remote MCP endpoint (Streamable HTTP + OAuth):

```json
{
  "mcpServers": {
    "read-ai": {
      "type": "streamableHttp",
      "url": "https://api.read.ai/mcp",
      "disabled": false
    }
  }
}
```

1. Add the server config above (or use the client's remote MCP UI).
2. Complete OAuth with a Read AI account when prompted.
3. Verify tools appear: `list_meetings`, `get_meeting_by_id`, `create_meeting_agent`, `share_meeting_report`.

No local install or API key required for OAuth clients.

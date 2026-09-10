# Read AI MCP — client connectors

Hosted server: `https://api.read.ai/mcp` (Streamable HTTP, OAuth). Same backend as Claude and ChatGPT.

## One-click / install links

| Client | Path |
| --- | --- |
| **Cursor / Grok Bot** | This repo → [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish) (plugin: `.cursor-plugin/` + `mcp.json`) |
| **Replit Agent** | [Add to Replit](https://replit.com/integrations?mcp=eyJkaXNwbGF5TmFtZSI6IlJlYWQgQUkiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hcGkucmVhZC5haS9tY3AifQ==) |
| **VS Code** | Open: `vscode:mcp/install?%7B%22name%22%3A%20%22read-ai%22%2C%20%22type%22%3A%20%22http%22%2C%20%22url%22%3A%20%22https%3A//api.read.ai/mcp%22%7D` |
| **Cline** | Submit this repo to [cline/mcp-marketplace](https://github.com/cline/mcp-marketplace/issues/new?template=mcp-server-submission.yml) |
| **Windsurf** | Manual config below + email Windsurf/Codeium for curated marketplace |
| **GitHub MCP Registry** | Publish `server.json` via `mcp-publisher` (feeds GitHub’s registry) |

## Manual configs

### Cline (`cline_mcp_settings.json`)

```json
{
  "mcpServers": {
    "read-ai": {
      "type": "streamableHttp",
      "url": "https://api.read.ai/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### Windsurf Cascade (`~/.codeium/windsurf/mcp_config.json`)

```json
{
  "mcpServers": {
    "read-ai": {
      "serverUrl": "https://api.read.ai/mcp"
    }
  }
}
```

(Confirm field name against current Windsurf docs — some builds use `url` instead of `serverUrl`.)

### VS Code (user / workspace MCP settings)

```json
{
  "servers": {
    "read-ai": {
      "type": "http",
      "url": "https://api.read.ai/mcp"
    }
  }
}
```

## Official MCP Registry / GitHub

`server.json` targets namespace `io.github.Read-AI-Inc/read-ai` (GitHub auth via the org). Prefer `com.read.ai/mcp` later with DNS verification on `read.ai`.

```bash
# from this repo
curl -L "https://github.com/modelcontextprotocol/registry/releases/latest/download/mcp-publisher_linux_amd64.tar.gz" | tar xz
./mcp-publisher login github
./mcp-publisher publish
```

## Developer account aliases (Read AI process)

Per internal 3PI docs: provision `<provider>-integration@read.ai` when a portal needs a dedicated contact email (`cline-integration@`, `vscode-integration@`, `replit-integration@`, `windsurf-integration@`, `github-integration@`).

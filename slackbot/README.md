# Slackbot MCP Client (existing Slack Marketplace app)

Slackbot can call Read AI’s **hosted** MCP (`https://api.read.ai/mcp`) the same way Claude / ChatGPT / Cursor do. This is **not** Slack’s own MCP server (`https://mcp.slack.com/mcp`, which exposes Slack data to other clients). It is Slack’s **MCP Client** inside Slackbot.

Being listed on the Slack Marketplace as an app does **not** enable this automatically — you wire the remote MCP into the existing Slack app, then update the Marketplace listing under Slack’s MCP checklist.

## Docs

- Connect MCP to Slackbot: https://docs.slack.dev/ai/slackbot-mcp-client
- Marketplace distribution extras: https://docs.slack.dev/ai/slackbot-mcp-client/distributing
- Help (end users): https://slack.com/help/articles/52414744085139-Connect-Slackbot-to-other-apps-with-MCP/
- Announcement: https://docs.slack.dev/changelog/2026/06/18/slackbot-mcp-client

## Configure (App Settings)

1. Open the existing Read AI Slack app at https://api.slack.com/apps
2. **Features → MCP Servers → Get Started**
3. Set:
   - **Name:** `Read AI`
   - **URL:** `https://api.read.ai/mcp`
   - **Auth type:** prefer **Dynamic Client Registration** (same OAuth 2.1 / DCR path as Claude & Cursor). If DCR is not accepted by our OAuth stack for Slack’s client, use **Manual OAuth** and register redirect URI `https://oauth2.slack.com/external/auth/callback` on the Read AI OAuth client.
4. Saving adds bot scope `mcp:connect`. Prefer making it **optional** when possible so workspace admins can install the base Slack app without MCP.
5. Install / reinstall the app to a test workspace (org-level for Enterprise if needed).
6. In MCP Servers → ⋮ → **Tools → Fetch Tools** (calls `tools/list` and caches definitions for review).
7. Verify in Slackbot: DM Slackbot → **Apps** → add Read AI (users can keep up to 5 MCP servers active) → complete OAuth → ask e.g. “What meetings did I have this week?”

## Manifest snippet

See [`app-manifest.mcp.snippet.json`](./app-manifest.mcp.snippet.json). Merge the `mcp_servers` block (and `mcp:connect` scope) into the live app manifest — do not replace unrelated Slack app features.

## Marketplace update checklist (Slack MCP extras)

- [ ] `mcp:connect` present (optional if the app has other primary functions)
- [ ] HTTPS MCP URL owned/controlled (`api.read.ai`)
- [ ] Auth configured (DCR or Manual OAuth + client secret in App Settings / `slack external-auth add-secret`)
- [ ] Manual OAuth redirect (if used): `https://oauth2.slack.com/external/auth/callback`
- [ ] Fetch Tools completed
- [ ] Tool discovery + invocation work in Slackbot
- [ ] Every tool has human-readable title, accurate description, `inputSchema` where needed, and **`readOnlyHint`** set
- [ ] Submission notes include install → auth → tool call → response examples
- [ ] Screenshot of MCP tool use inside a Slackbot conversation
- [ ] Follow Slack Marketplace guidelines + MCP iframe rules if returning MCP Apps / rich UI

## Out of scope

- Implementing a new MCP server (tools already live on `https://api.read.ai/mcp`)
- Slack MCP Server (inbound Slack tools for Cursor/Claude)

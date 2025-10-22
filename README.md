## MCP server for your Postgres database

Use mcp-clent.ts to request resources and tools.

mcp-postgres.ts is an express app. Streamable HTTP transport is used for handling MCP requests.

Add .env with following variables:

```bash
PORT=3000
DATABASE_URL='postgres://postgres:postgres@localhost:5434/Adventureworks'
```

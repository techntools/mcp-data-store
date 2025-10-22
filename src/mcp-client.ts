// client.ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

async function main() {
    // The base URL should point to the server's /mcp endpoint
    const baseUrl = new URL("http://localhost:3000/mcp");

    const client = new Client({ name: "example-client", version: "1.0.0" });

    // Create transport and connect
    const transport = new StreamableHTTPClientTransport(baseUrl);
    await client.connect(transport);
    console.log("Connected to MCP server");

    // List resources
    const resources = await client.listResources();
    console.log("Resources:", JSON.stringify(resources, null, 2));

    // Disconnect
    await client.close();
}

main().catch((err) => { console.error(err); });

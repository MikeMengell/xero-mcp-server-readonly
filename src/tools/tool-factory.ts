import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { GetTools } from "./get/index.js";
import { ListTools } from "./list/index.js";
import { UpdateTools } from "./update/index.js";

export function ToolFactory(server: McpServer) {
  GetTools.map((tool) => tool()).forEach((tool) =>
    server.tool(tool.name, tool.description, tool.schema, tool.handler),
  );
  ListTools.map((tool) => tool()).forEach((tool) =>
    server.tool(tool.name, tool.description, tool.schema, tool.handler),
  );
  UpdateTools.map((tool) => tool()).forEach((tool) =>
    server.tool(tool.name, tool.description, tool.schema, tool.handler),
  );
}

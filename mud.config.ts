import { defineWorld } from "@latticexyz/world";
 
export default defineWorld({
  namespace: "mud",
  enums: {
    TerrainType: ["None", "TallGrass", "Boulder"],
  },
  tables: {
    Counter: {
      schema: {
        value: "uint32",
      },
      key: [],
    },
    Tasks: {
      schema: {
        id: "bytes32",
        createdAt: "uint256",
        completedAt: "uint256",
        description: "string",
      },
      key: ["id"],
    },
  },
  systems: {
    IncrementSystem: {
      name: "increment",
      openAccess: true,
    },
  },
  excludeSystems: ["System3", "System2"],
});

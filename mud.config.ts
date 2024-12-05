import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "main",
  tables: {
    Counter: {
      schema: {
        value: "uint32",
      },
      key: [],
    },
  },
});

export default {
  rules: {
    // Enforce FSD structure
    "fsd/layers-slices": "error",
    "fsd/public-api": "error",
    "fsd/no-cross-import": "error",

    // Allow app layer to import from all layers
    "fsd/no-layer-import": [
      "error",
      {
        allow: {
          app: ["widgets", "features", "entities", "shared"],
          widgets: ["features", "entities", "shared"],
          features: ["entities", "shared"],
          entities: ["shared"],
          shared: [],
        },
      },
    ],
  },
};

const schema = {
  type: "object",
  patternProperties: {
    "^[0-9]{4}$": {
      type: "object",
      patternProperties: {
        "^[0-9]+$": {
          type: "object",
          properties: {
            date: { type: "string" },
            eventName: { type: "string" },
            organizers: {
              type: "array",
              items: { type: "string" }
            },
            time: { type: "string" },
            location: { type: "string" },
            notes: { type: "string" }
          },
          required: ["date", "eventName", "organizers", "time", "location"],
          additionalProperties: false
        }
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
}

export default schema;

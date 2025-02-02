export default {
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "links",
        title: "Navigation Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", title: "Name", type: "string" },
              { name: "url", title: "URL", type: "string" },
            ],
          },
        ],
      },
    ],
  };
  
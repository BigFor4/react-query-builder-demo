export default {
  title: "OR",
  type: "operator",
  children: [
    {
      title: "Attribute.Height > 100",
      type: "attribute",
    },
    {
      title: "Attribute.Height < 2000",
      type: "attribute",
    },
    {
      title: "AND",
      type: "operator",
      children: [
        {
          title: "Attribute.Width > 100",
          type: "attribute",
        },
        {
          title: "Attribute.Width < 2000",
          type: "attribute",
        },
        {
          title: "OR",
          type: "operator",
          children: [
            {
              title: "Attribute.Width = 2005",
              type: "attribute",
            },
          ],
        },
      ],
    },
  ],
};

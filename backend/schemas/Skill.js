export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bgcolor",
      title: "BgColor",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImageURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

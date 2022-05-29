export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "describtion",
      title: "Describtion",
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

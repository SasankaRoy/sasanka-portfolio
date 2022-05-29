export default {
  name: "experience",
  title: "Experience",
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
      name:'projectlink',
      title: 'Project Link',
      type: 'string',

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

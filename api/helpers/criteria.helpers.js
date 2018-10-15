const createCriteria = (citeriaFor, values) => {
  switch (citeriaFor) {
    case "songs":
      return [
        {
          key: "title",
          text: values.title
        },
        {
          key: "artist",
          text: values.artist
        }
      ];
    default:
      return null;
  }
};

export { createCriteria };

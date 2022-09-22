export const MaxLength = ({ name, content, date }: IToolLength) => {
  const modified: IToolLength = {
    name: name.length >= 20 ? (name = name.slice(0, 20) + "...") : name,
    content: content.length >= 20 ? (content = content.slice(0, 20) + "...") : content,
    date:
      date.split(",").length > 2
        ? (date =
            "..., " +
            date
              .split(",")
              .slice(date.split(",").length - 2)
              .join()
              .trim())
        : date,
  };

  return modified;
};

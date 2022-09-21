export const MaxLength = ({ name, content, dates }: IToolLength) => {
  const modified: IToolLengthModified = {
    name: name.length >= 20 ? (name = name.slice(0, 20) + "...") : name,
    content: content.length >= 20 ? (content = content.slice(0, 20) + "...") : content,
    dates:
      dates.split(",").length > 2
        ? (dates =
            "..., " +
            dates
              .split(",")
              .slice(dates.split(",").length - 2)
              .join()
              .trim())
        : dates,
  };

  return modified;
};

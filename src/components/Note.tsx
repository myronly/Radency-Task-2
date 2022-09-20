import React, { FC } from "react";
import { ToolsNote } from "./toolsNote/ToolsNote";

export const Note: FC<INote> = ({ name, created, category, content, dates, id, archived }) => {
  return (
    <tr>
      <td>
        <div className="img__title">
          <img width="30" height="30" src={"img/categories/" + category + ".png"} alt={category} />
        </div>
      </td>
      <td className="noteName" title="name">
        <span>{name}</span>
      </td>
      <td className="noteCreated">
        <span>{created}</span>
      </td>
      <td className="noteCategory">
        <span>{category}</span>
      </td>
      <td className="noteContent" title="content">
        <span>{content}</span>
      </td>
      <td className="noteDates" title="dates">
        <span>{dates}</span>
      </td>
      <td>
        <ToolsNote id={id} archived={archived} />
      </td>
    </tr>
  );
};

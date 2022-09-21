import React, { FC } from "react";
// Components
import { HeadNoteTable } from "../components/table/HeadNoteTable";

export const Table: FC<IChildTable> = ({ children, title, archived }) => {
  return (
    <React.Fragment>
      <main>
        <table>
          <caption>{title}</caption>
          <HeadNoteTable archived={archived} />
          <tbody>{children}</tbody>
        </table>
      </main>
    </React.Fragment>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { CreateNote } from "../components/CreateNote";

// Components
import { Note } from "../components/Note";
// import { CreateNote } from "./components/CreateNote";

export const ActivePage = () => {
  const notes: INote[] = useSelector((state: INotesState) => state.notes.note);

  return (
    <div>
      <table className="active__notes">
        <caption>Active</caption>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>
              <div className="tools">
                <div></div>
                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                    <title>Archive</title>
                    <path d="M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM16 26l-10-8h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2h-22.343z"></path>
                  </svg>
                </div>
                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                    <title>Delete</title>
                    <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
                  </svg>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{notes?.map((note: INote) => (!note.archived ? <Note {...note} key={note.id} /> : null))}</tbody>
      </table>
      <CreateNote />
    </div>
  );
};

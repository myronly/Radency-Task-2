import React from "react";
import { useSelector } from "react-redux";
// Components
import { Note } from "../components/table/Note";
import { Table } from "../layout/Table";

export const ActivePage = () => {
  const notes: INote[] = useSelector((state: INotesState) => state.notes.note);
  const activeNote = notes?.map((note: INote) => (!note.archived ? <Note {...note} key={note.id} /> : null));

  return <Table title="Active" archived={false} children={activeNote} />;
};

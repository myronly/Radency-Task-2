import { useSelector } from "react-redux";
import { Note } from "../components/table/Note";
import { Table } from "../layout/Table";

export const ArchivePage = () => {
  const notes: INote[] = useSelector((state: INotesState) => state.notes.note);
  const archiveNote = notes?.map((note: INote) => (note.archived ? <Note {...note} key={note.id} /> : null));

  return <Table title="Archive" archived={true} children={archiveNote} />;
};

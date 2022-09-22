import { FC } from "react";
import { useDispatch } from "react-redux";
import { archiveNote, deleteNote } from "../../redux/features/noteSlice";

export const ToolsNote: FC<IToolNote> = ({ id, archived, isEdit, editHandler, saveHandler }) => {
  const dispatch = useDispatch();

  const archiveHandler = () => dispatch(archiveNote(id));
  const deleteHandler = () => dispatch(deleteNote(id));

  return (
    <div className="tools">
      <div onClick={!isEdit ? editHandler : saveHandler} id="edit">
        {!isEdit ? (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <title>Edit</title>
            <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
          </svg>
        ) : (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <title>Save</title>
            <path d="M28 0h-28v32h32v-28l-4-4zM16 4h4v8h-4v-8zM28 28h-24v-24h2v10h18v-10h2.343l1.657 1.657v22.343z"></path>
          </svg>
        )}
      </div>
      <div onClick={archiveHandler} id="archive">
        {!archived ? (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <title>Archive</title>
            <path d="M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM16 26l-10-8h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2h-22.343z"></path>
          </svg>
        ) : (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <title>Unarchive</title>
            <path d="M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM20 20v6h-8v-6h-6l10-8 10 8h-6zM4.828 6l2-2h18.343l2 2h-22.343z"></path>
          </svg>
        )}
      </div>
      <div onClick={deleteHandler} id="delete">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
          <title>Delete</title>
          <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
        </svg>
      </div>
    </div>
  );
};

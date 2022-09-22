import { FC } from "react";

export const HeadNoteTable: FC<IToolNote> = ({ archived }) => {
  return (
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
              {archived ? (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                  <title>Unarchive</title>
                  <path d="M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM20 20v6h-8v-6h-6l10-8 10 8h-6zM4.828 6l2-2h18.343l2 2h-22.343z"></path>
                </svg>
              ) : (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                  <title>Archive</title>
                  <path d="M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM16 26l-10-8h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2h-22.343z"></path>
                </svg>
              )}
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
  );
};

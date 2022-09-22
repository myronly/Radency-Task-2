import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../redux/features/noteSlice";
import { ToolsNote } from "./ToolsNote";
import { MaxLength } from "../assets/MaxLength";
import { DatesFromContent } from "../assets/DatesFromContent";

export const Note: FC<INote> = ({ name, created, category, content, id, archived }) => {
  const dispatch = useDispatch();
  const date: string = DatesFromContent(content);
  const modified = MaxLength({ name, content, date });

  const [editIsActive, setEditIsActive] = useState(false);
  const toggleEditActive = () => {
    setEditIsActive(!editIsActive);
  };

  const [editName, setEditName] = useState(name);
  const [editCategory, setEditCategory] = useState(category);
  const [editContent, setEditContent] = useState(content);
  const saveNoteHandler = () => {
    if (editName.split(" ").join("") === "" || editCategory === "" || editContent.split(" ").join() === "") return;
    dispatch(editNote({ id, editName, editCategory, editContent }));
    toggleEditActive();
  };

  return (
    <tr>
      <td>
        <div className="img__title">
          <img width="30" height="30" src={"img/categories/" + category + ".png"} alt={category} />
        </div>
      </td>
      <td className="noteName" title={name}>
        {!editIsActive ? <span>{modified.name}</span> : <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" placeholder="Name" required />}
      </td>
      <td className="noteCreated" title={created}>
        <span>{created}</span>
      </td>
      <td className="noteCategory" title={category}>
        {!editIsActive ? (
          <span>{category}</span>
        ) : (
          <select onChange={(e) => setEditCategory(e.target.value)} name="category" defaultValue={editCategory} required>
            <option value="" disabled>
              Category
            </option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Quote">Quote</option>
          </select>
        )}
      </td>
      <td className="noteContent" title={content}>
        {!editIsActive ? <span>{modified.content}</span> : <input value={editContent} onChange={(e) => setEditContent(e.target.value)} type="text" placeholder="Content" required />}
      </td>
      <td className="noteDates" title={date}>
        <span>{modified.date}</span>
      </td>
      <td>
        <ToolsNote id={id} archived={archived} isEdit={editIsActive} editHandler={toggleEditActive} saveHandler={saveNoteHandler} />
      </td>
    </tr>
  );
};

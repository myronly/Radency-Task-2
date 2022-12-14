import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import moment from "moment";
import { addNote } from "../../redux/features/noteSlice";

export const CreateNote = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const setActiveHandler = () => setActive(!active);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const addNoteHandler = () => {
    if (name === "" || category === "" || content === "") return;
    const note = {
      name: name,
      created: moment().format("ll"),
      category: category,
      content: content,
      id: v4(),
      archived: false,
    };
    dispatch(addNote(note));
    setActive(!active);
    setName("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="create__note">
      {active ? (
        <form onSubmit={(e) => e.preventDefault()} className="create__note-form">
          <div className="create__note-form-wrapper">
            <input onChange={(e) => setName(e.target.value.trim())} id="newName" type="text" placeholder="Name" required />
            <select onChange={(e) => setCategory(e.target.value)} id="newCategory" name="category" defaultValue="" required>
              <option value="" disabled>
                Category
              </option>
              <option value="Task">Task</option>
              <option value="Idea">Idea</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Quote">Quote</option>
            </select>
            <input onChange={(e) => setContent(e.target.value.trim())} id="newContent" type="text" placeholder="Content" required />
            <div className="create__note-add">
              <button onClick={addNoteHandler} className="add__note" type="submit">
                Add
              </button>
            </div>
            <div onClick={setActiveHandler} className="close">
              <img src="./img/close.png" alt="close" />
            </div>
          </div>
        </form>
      ) : (
        <button onClick={setActiveHandler} className="create__note-btn active">
          Create Note
        </button>
      )}
    </div>
  );
};

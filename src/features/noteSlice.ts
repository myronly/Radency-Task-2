import { createSlice } from "@reduxjs/toolkit";

const initialState: INotes = {
  note: [
    {
      name: "Shopping list - 1",
      created: "April 20, 2021",
      category: "Task",
      content: "Lorem ipsum dolor sit ",
      dates: "",
      id: "7243f96a-c934-4cbc-8a21-9aa5b1c45721",
      archived: false,
    },
    {
      name: "New Feature",
      created: "April 27, 2021",
      category: "Random Thought",
      content: "The some content",
      dates: "",
      id: "1aef8fd1-94e6-4696-b601-9f420c94e7b0",
      archived: true,
    },
    {
      name: "Shopping list - 5",
      created: "April 12, 2014",
      category: "Idea",
      content: "Lorem ipsum dolor sit ",
      dates: "",
      id: "23fdg54ret6a-c934-4cbc-8a21-43555721",
      archived: false,
    },
  ],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.note.push(action.payload);
    },
    archiveNote: (state, action) => {},
    editNote: (state, action) => {},
    deleteNote: (state, action) => {
      state.note = state.note.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

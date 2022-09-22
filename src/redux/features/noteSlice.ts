import { createSlice } from "@reduxjs/toolkit";

const initialState: INotes = {
  note: [
    {
      name: "Shopping list",
      created: "April 20, 2021",
      category: "Task",
      content: "The some content",
      id: "tyut-yu546-6wer57",
      archived: false,
    },
    {
      name: "The theory of evolution",
      created: "April 27, 2021",
      category: "Random Thought",
      content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",

      id: "tyu-6ytu5-htr7",
      archived: true,
    },
    {
      name: "The theory of evolution",
      created: "May 05, 2021",
      category: "Idea",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",

      id: "yt-u65rt-hrth",
      archived: false,
    },
    {
      name: "William Gaddis",
      created: "May 07, 2021",
      category: "Quote",
      content: "The some content",

      id: "rth65-mghrrth-thrth",
      archived: false,
    },
    {
      name: "Books",
      created: "May 15, 2021",
      category: "Random Thought",
      content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",

      id: "65rt-hrgh-mth",
      archived: false,
    },
    {
      name: "William Gaddis",
      created: "May 07, 2021",
      category: "Quote",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",

      id: "65rt-gmhh-rth",
      archived: true,
    },
    {
      name: "New Feature",
      created: "April 27, 2021",
      category: "Random Thought",
      content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",

      id: "g345m-h34565rth-gmhrth",
      archived: true,
    },
    {
      name: "Shopping list",
      created: "April 20, 2021",
      category: "Task",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",

      id: "6345-gmh5ghm-rthrth",
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
    editNote: (state, action) => {
      const editNote = state.note.find((note) => note.id === action.payload.id);
      editNote!.name = action.payload.editName;
      editNote!.category = action.payload.editCategory;
      editNote!.content = action.payload.editContent;
    },
    archiveNote: (state, action) => {
      const toggleArchive = state.note.find((note) => note.id === action.payload);
      toggleArchive!.archived = !toggleArchive!.archived;
    },
    deleteNote: (state, action) => {
      state.note = state.note.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, editNote, archiveNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

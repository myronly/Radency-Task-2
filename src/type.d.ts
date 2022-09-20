// Note Types
interface INote {
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
  id: string;
}
interface INotes {
  note: INote[];
}
interface INotesState {
  notes: INotes;
}

// Tool Types
interface IToolNote {
  id: string;
  archived: boolean;
}

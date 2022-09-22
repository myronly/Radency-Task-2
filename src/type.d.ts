// Note Types
interface INote {
  name: string;
  created: string;
  category: string;
  content: string;
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
  archived: boolean;
  id?: string;
  isEdit?: boolean;
  editHandler?: () => void;
  saveHandler?: () => void;
}
interface IEditActive {
  active: boolean;
}
interface IToolLength {
  name: string;
  content: string;
  date: string;
}

// Table
interface IChildTable {
  children: React.ReactNode;
  title: string;
  archived: boolean;
}

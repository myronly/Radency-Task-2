import { useSelector } from "react-redux";

export const StatusPage = () => {
  const notes: INote[] = useSelector((state: INotesState) => state.notes.note);

  const noteTask = notes.filter((note) => note.category === "Task");
  const noteIdea = notes.filter((note) => note.category === "Idea");
  const noteRandomThought = notes.filter((note) => note.category === "Random Thought");
  const noteQuote = notes.filter((note) => note.category === "Quote");

  return (
    <main>
      <table className="status__notes">
        <caption>Status</caption>
        <thead>
          <tr>
            <th></th>
            <th>Note Category</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="img__title">
                <img width="30" height="30" src="img/categories/Task.png" alt="Task" />
              </div>
            </td>
            <td className="statusCategory">Task</td>
            <td className="statusActive status">{noteTask.filter((task) => task.archived === false).length}</td>
            <td className="statusArchived status">{noteTask.filter((task) => task.archived === true).length}</td>
          </tr>
          <tr>
            <td>
              <div className="img__title">
                <img width="30" height="30" src="img/categories/Idea.png" alt="Idea" />
              </div>
            </td>
            <td className="statusCategory">Idea</td>
            <td className="statusActive status">{noteIdea.filter((task) => task.archived === false).length}</td>
            <td className="statusArchived status">{noteIdea.filter((task) => task.archived === true).length}</td>
          </tr>
          <tr>
            <td>
              <div className="img__title">
                <img width="30" height="30" src="img/categories/Random Thought.png" alt="Random Thought" />
              </div>
            </td>
            <td className="statusCategory">Random Thought</td>
            <td className="statusActive status">{noteRandomThought.filter((task) => task.archived === false).length}</td>
            <td className="statusArchived status">{noteRandomThought.filter((task) => task.archived === true).length}</td>
          </tr>
          <tr>
            <td>
              <div className="img__title">
                <img width="30" height="30" src="img/categories/Quote.png" alt="Quote" />
              </div>
            </td>
            <td className="statusCategory">Quote</td>
            <td className="statusActive status">{noteQuote.filter((task) => task.archived === false).length}</td>
            <td className="statusArchived status">{noteQuote.filter((task) => task.archived === true).length}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

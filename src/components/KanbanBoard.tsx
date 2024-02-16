import { useState } from "react";

import ColumnContainer from "./ColumnContainer";
import PlusIcon from "./icons/PlusIcon";

import { Column } from "../types/column";
import { Id } from "../types/id";

import { generateId } from "../utils/id";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const createColumn = () => {
    const newColumn: Column = {
      id: generateId(),
      title: "New column",
    };

    setColumns([...columns, newColumn]);
  };

  const deleteColumn = (id: Id) => {
    const leftColumns = columns.filter((column) => column.id !== id);

    setColumns(leftColumns);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((column) => (
            <ColumnContainer
              key={column.id}
              column={column}
              handleDelete={deleteColumn}
            />
          ))}
        </div>
        <button
          className="flex h-[60px] w-[350px] min-w-[350px] cursor-pointer gap-2 rounded-lg border-2 border-columnBackgroundColor bg-mainBackgroundColor p-4 ring-rose-500 hover:ring-2"
          onClick={createColumn}
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;

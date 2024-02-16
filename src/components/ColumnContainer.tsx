import DeleteIcon from "./icons/DeleteIcon";

import { Column } from "../types/column";
import { Id } from "../types/id";

export type ColumnContainerProps = {
  column: Column;
  handleDelete: (id: Id) => void;
};

const ColumnContainer = (props: ColumnContainerProps) => {
  const { column, handleDelete } = props;

  return (
    <div className="flex h-[500px] max-h-[500px] w-[350px] flex-col rounded-md bg-columnBackgroundColor">
      <div className="text-md flex h-[60px] items-center justify-center rounded-md rounded-b-none border-4 border-columnBackgroundColor bg-mainBackgroundColor p-3 font-bold">
        <div className="flex gap-2">
          <div className="flex items-center justify-center bg-columnBackgroundColor px-2 py-1 text-sm">
            0
          </div>
          {column.title}
        </div>
        <button
          className="rounded stroke-gray-500 px-1 py-2 hover:bg-columnBackgroundColor hover:stroke-white"
          onClick={() => handleDelete(column.id)}
        >
          <DeleteIcon />
        </button>
      </div>

      <div className="flex flex-grow">Content</div>

      <div>Footer</div>
    </div>
  );
};

export default ColumnContainer;

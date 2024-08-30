import { TodoType } from "./types/todo";

type TodoProps = Omit<TodoType, "id">;

export const Todo = (props: TodoProps) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー: ${userId})`}</p>;
};

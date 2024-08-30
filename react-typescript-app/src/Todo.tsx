type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completMarc = completed ? "[完]" : "[未]";
  return <p>{`${completMarc} ${title}(ユーザー: ${userId})`}</p>;
};

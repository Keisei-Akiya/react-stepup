import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile = (props: Props) => {
  const { user } = props;
  return (
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <dt>hobbies</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `クッパJr.${val}`,
    image:
      "https://neoapo.com/images/character/24927/47b8d4dc7297963dcebd7f8eede36640.jpg",
    email: "12345@example.com",
    phone: "000-1111-2222",
    company: {
      name: "Test.inc",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>USERS</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

import React, { useEffect, useState } from "react";
import { BackButton, Td, Wrapper, TableWrapper } from "./styles";
import { useParams } from "react-router";
import { selectUsers } from "../../store/users/selectors";
import { useSelector } from "react-redux";
import { IUser } from "../../store/users/types";

interface IUserInfo {}

const UserInfo: React.FC<IUserInfo> = () => {
  const { userId } = useParams();
  const { users } = useSelector(selectUsers);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const [selectedUser] = users.filter(
      (user) => user.id === parseInt(userId ? userId : "1")
    );
    setUser(selectedUser);
  }, [userId, JSON.stringify(user)]);

  if (!user) return <>Loading</>;

  return (
    <Wrapper>
      <BackButton to="/users">Back to users</BackButton>
      <TableWrapper>
        <table>
          <tr>
            <Td>Id</Td>
            <Td>{user.id}</Td>
          </tr>
          <tr>
            <Td>Name</Td>
            <Td>{user.name}</Td>
          </tr>
          <tr>
            <Td>Email</Td>
            <Td>{user.email}</Td>
          </tr>
          <tr>
            <Td>Age</Td>
            <Td>{user.age}</Td>
          </tr>
          <tr>
            <Td>Description</Td>
            <Td>{user.description}</Td>
          </tr>
          <tr>
            <Td>Registered</Td>
            <Td>{user.created_at}</Td>
          </tr>
          <tr>
            <Td>Updated</Td>
            <Td>{user.updated_at}</Td>
          </tr>
        </table>
      </TableWrapper>
    </Wrapper>
  );
};

export default UserInfo;

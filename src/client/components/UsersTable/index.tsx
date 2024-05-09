import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Wrapper, SearchInput, PageButton, Table, SortableTh } from "./styles";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/users/selectors";
import { IUser } from "../../store/users/types";

interface IUsersTabel {}

interface IFilters {
  sortedBy: "name" | "age";
  isDescending: boolean;
  search: string;
  pagination: {
    limit: number;
    current: number;
  };
}

const UsersTable: React.FC<IUsersTabel> = () => {
  const [filter, setFilter] = useState<IFilters>({
    sortedBy: "name",
    isDescending: true,
    search: "",
    pagination: {
      limit: 10,
      current: 0,
    },
  });
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [filterdUsersLength, setFilteredUsersLength] = useState(0);

  const { users } = useSelector(selectUsers);

  const pagesCount = useMemo(
    () => Math.ceil(filterdUsersLength / filter.pagination.limit),
    [filterdUsersLength, filter.pagination.limit]
  );

  const getSortUsers = useCallback(
    (users: IUser[]) => {
      const userList = [...users];
      userList.sort((a, b) => {
        if (a[filter.sortedBy] < b[filter.sortedBy]) return -1;
        if (a[filter.sortedBy] > b[filter.sortedBy]) return 1;
        return 0;
      });

      if (filter.isDescending) {
        userList.reverse();
      }

      return userList;
    },
    [filter.sortedBy, filter.isDescending]
  );

  const filterBySearch = useCallback(
    (users: IUser[]) => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filter.search.toLowerCase())
      );
    },
    [filter.search]
  );

  const getPaginatedUsers = useCallback(
    (users: IUser[]) => {
      const step = filter.pagination.current * filter.pagination.limit;
      return users.slice(step, step + filter.pagination.limit);
    },
    [filter.pagination.current, filter.pagination.limit]
  );

  useEffect(() => {
    const filteredUsers = filterBySearch(getSortUsers(users));
    setFilteredUsersLength(filteredUsers.length);
    setFilteredUsers(getPaginatedUsers(filteredUsers));
  }, [
    filter.search,
    filter.sortedBy,
    filter.isDescending,
    filter.pagination.current,
    filter.pagination.limit,
    JSON.stringify(users),
    getSortUsers,
    filterBySearch,
    getPaginatedUsers,
  ]);

  const onSortClick = (sortBy: "name" | "age") => {
    const newFilter = { ...filter, pagination: { ...filter.pagination } };
    if (newFilter.sortedBy === sortBy) {
      newFilter.isDescending = !newFilter.isDescending;
    } else {
      newFilter.sortedBy = sortBy;
      newFilter.isDescending = true;
    }

    setFilter(newFilter);
  };

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      pagination: { ...filter.pagination, current: 0 },
      search: e.currentTarget.value,
    });
  };

  const onPageChange = (page: number) => {
    setFilter({
      ...filter,
      pagination: { ...filter.pagination, current: page },
    });
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Type for search..."
        value={filter.search}
        onChange={onSearchChange}
      />
      <Table>
        <tr>
          <th>Id</th>
          <SortableTh
            active={filter.sortedBy === "name"}
            isDescending={filter.isDescending}
            onClick={() => onSortClick("name")}
          >
            Name
          </SortableTh>
          <th>Email</th>
          <SortableTh
            active={filter.sortedBy === "age"}
            isDescending={filter.isDescending}
            onClick={() => onSortClick("age")}
          >
            Age
          </SortableTh>
        </tr>
        {filteredUsers.map(({ id, name, email, age }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
          </tr>
        ))}
      </Table>
      <div>
        {[...Array.from(Array(pagesCount).keys())].map((item) => (
          <PageButton
            active={filter.pagination.current === item}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PageButton>
        ))}
      </div>
    </Wrapper>
  );
};

export default UsersTable;

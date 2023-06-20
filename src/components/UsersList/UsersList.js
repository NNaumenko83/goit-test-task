// import { Task } from "components/Task/Task";
import { UsersItem } from "components/UsersItem/UsersItem";

// import { useSelector } from "react-redux";
// import { statusFilters } from "redux/constants";
// import { getStatusFilter } from "redux/selectors";
import { useUsers } from "hooks/useUsers";
import { UsersListStyled } from "./UsersList.styled";

// const getVisibleTasks = (tasks = [], statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);

//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);

//     default:
//       return tasks;
//   }
// };

export const UsersList = () => {
  const { data: users } = useUsers();
  console.log("users:", users);

  //   const statusFilter = useSelector(getStatusFilter);

  //   const visibleTasks = getVisibleTasks(query.data, statusFilter);

  return (
    <UsersListStyled>
      {users.map((user) => (
        <UsersItem user={user} key={users.id} />
      ))}
    </UsersListStyled>
  );
};

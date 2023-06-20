// import { Task } from "components/Task/Task";
// import css from "./TaskList.module.css";
// import { useSelector } from "react-redux";
// import { statusFilters } from "redux/constants";
// import { getStatusFilter } from "redux/selectors";
import { useUsers } from "hooks/useUsers";

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

  return <p>{JSON.stringify(users, null, 2)}</p>;
  // return (
  //   <ul className={css.list}>
  //     {users.map((users) => (
  //       <li className={css.listItem} key={users.id}>
  //         <Task task={users} />
  //       </li>
  //     ))}
  //   </ul>
  // );
};

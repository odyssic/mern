import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "max",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      places: "3",
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

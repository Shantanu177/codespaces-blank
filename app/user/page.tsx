import React from "react";

const UserList: React.FC = () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-blue-500 text-white p-2 rounded-md mb-2"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

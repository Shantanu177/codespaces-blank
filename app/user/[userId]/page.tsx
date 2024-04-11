import React from "react";
import { notFound } from "next/navigation";
interface IUserPage {
  params: {
    userId: string;
  };
}

const UserPage = ({ params }: IUserPage) => {
  let { userId } = params;
  if (isNaN(parseInt(userId)) || parseInt(userId) > 10) notFound();

  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">User ID:</h1>
      <p className="text-lg">{userId}</p>
    </div>
  );
};

export default UserPage;

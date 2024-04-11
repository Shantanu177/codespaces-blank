import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">User Not Found</h1>
        <p className="text-gray-600">
          Sorry, the requested user could not be found.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

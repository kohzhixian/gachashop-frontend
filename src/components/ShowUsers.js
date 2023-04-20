import React, { Fragment, useEffect, useState } from "react";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";
import UserList from "./UserList";

const ShowUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/users");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedUsers(responseData.users);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {isLoading && <div>LOADING....</div>}
      {!isLoading && (
        <Card>
          <h1>ALL USERS</h1>
          {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
        </Card>
      )}
    </Fragment>
  );
};

export default ShowUsers;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function User() {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const getUser = (data) => {
    // alert(data.firstName);
    navigate(`/users/${data.id}`, { replace: true });
  };

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      console.log(res.data.users);
      setUser(res.data.users);
    } catch (error) {
      console.log("api error : ", error);
    }
  };
  return (
    <div className="container mt-4 p-5">
      <table className="table table-primary table-striped ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">name</th>
            <th scope="col">gender</th>
            <th scope="col">company</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} onClick={() => getUser(user)}>
                <th>{user.id}</th>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.company.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;

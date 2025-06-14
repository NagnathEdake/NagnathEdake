import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewUser() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const handleClick = (data) => {
    // console.log(data.address.geo);
    // alert(JSON.stringify(data.address.geo));
    navigate(`/newusers/${data.id}`, { replace: true });
  };
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUserData(res.data);
    } catch (error) {
      console.log("api error");
    }
  };
  return (
    <div className="container mt-4 pt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">company</th>
            <th scope="col">address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => {
            return (
              <tr onClick={() => handleClick(user)} key={index}>
                <td>{user.id}</td>
                <td>{user.name} </td>
                <td>{user.email} </td>
                <td>{user.company.name} </td>
                <td>{user.address.street} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default NewUser;

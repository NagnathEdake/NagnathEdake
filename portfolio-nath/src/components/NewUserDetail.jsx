import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewUserDetail() {
  const [newUser, setNewUser] = useState([]);
  const { newId } = useParams();
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${newId}`
      );
      console.log(res.data);
      setNewUser(res.data);
    } catch (error) {
      console.log("api error");
    }
  };
  return (
    <div className="container mt-4 p-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">username</th>
            <th scope="col">website</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{newUser.id}</td>
            <td>{newUser.name} </td>
            <td>{newUser.email} </td>
            <td>{newUser.username} </td>
            <td>{newUser.website} </td>
            <td>{newUser.phone} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewUserDetail;

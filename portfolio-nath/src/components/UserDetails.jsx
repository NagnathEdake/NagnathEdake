import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [detail, setDetail] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${userId}`);
      console.log(res.data);
      setDetail(res.data);
    } catch (error) {
      console.log("api error : ", error);
    }
  };
  return (
    <div className="container mt-4 p-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">age</th>
            <th scope="col">gender</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">username</th>
            <th scope="col">password</th>
            <th scope="col">birth-date</th>
            <th scope="col">bloodGroup</th>
            <th scope="col">height</th>
            <th scope="col">weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.id}</td>
            <td>{detail.firstName}</td>
            <td>{detail.lastName}</td>
            <td>{detail.age}</td>
            <td>{detail.gender}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.username}</td>
            <td>{detail.password}</td>
            <td>{detail.birthDate}</td>
            <td>{detail.bloodGroup}</td>
            <td>{detail.height}</td>
            <td>{detail.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;

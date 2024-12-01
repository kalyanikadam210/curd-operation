import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://674ae61971933a4e8853c256.mockapi.io/curd")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    if (!id) {
      console.error("Invalid ID:", id);
      return; // Prevent the request if the ID is invalid
    }

    axios
      .delete(`https://674ae61971933a4e8853c256.mockapi.io/curd/${id}`)
      .then(() => {
        console.log(`Successfully deleted ID: ${id}`);
        getData();
      })
      .catch((error) => {
        console.error(
          "Error deleting record:",
          error.response?.data || error.message
        );
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Read operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>

                  <td>{eachData.email}</td>
                  <td>
                    <Link
                      to="/update"
                      onClick={() => {
                        localStorage.setItem("id", eachData.id);
                        localStorage.setItem("name", eachData.name);
                        localStorage.setItem("email", eachData.email);
                      }}
                    >
                      <button className="btn btn-success">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;

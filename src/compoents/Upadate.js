import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedId) setId(Number(storedId));
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://674ae61971933a4e8853c256.mockapi.io/curd/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("An error occurred while updating.");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mx-2">
          Update
        </button>
        <Link to="/read">
          <button type="button" className="btn btn-secondary mx-2">
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Update;

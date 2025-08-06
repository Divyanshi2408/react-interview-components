import React, { useState, useEffect } from "react";

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setFilteredUser(data);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };
    FetchUser();
  }, []);

  const companies = ["All", ...new Set(users.map((user) => user.company.name))];

  useEffect(() => {
    let result = [...users];
    if (searchTerm.trim()) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCompany !== "All") {
      result = result.filter((user) => user.company.name === selectedCompany);
    }
    setFilteredUser(result);
  }, [searchTerm, selectedCompany, users]);

  return (
    <div>
      <h1>User Directory</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
      />
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        {companies.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
      </select>
      {loading ? (
        <p>Loading...</p>
      ) : filteredUser.length > 0 ? (
        <>
          <p>Showing {filteredUser.length} user(s)</p>
          <ul>
            {filteredUser.map((user) => (
              <li key={user.id}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
                <p>Phone: {user.phone}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default UserDirectory;

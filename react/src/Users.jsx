import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div className="custom-bg min-vh-100 py-5">
  <div className="container">
    <h1 className="text-center text-white mb-5">👥 Lista Utenti</h1>
    <div className="row">
      {users.map(user => (
        <div className="col-md-6 col-lg-4 mb-4" key={user.id}>
          <div className="card user-card shadow-lg border-0 h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">{user.name}</h5>
              <p className="card-text small">
                <strong>Username:</strong> {user.username}<br />
                <strong>Email:</strong> {user.email}<br />
                <strong>Phone:</strong> {user.phone}<br />
                <strong>City:</strong> {user.address.city}<br />
                <strong>Street:</strong> {user.address.street}<br />
                <strong>Suite:</strong> {user.address.suite}<br />
                <strong>ZipCode:</strong> {user.address.zipcode}<br />
                <strong>Lat:</strong> {user.address.geo.lat}<br />
                <strong>Lng:</strong> {user.address.geo.lng}<br />
                <strong>Company:</strong> {user.company.name}<br />
                <em>"{user.company.catchPhrase}"</em><br />
                <span className="text-muted">{user.company.bs}</span>
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-end">
              <a 
                href={`http://${user.website}`} 
                className="btn btn-sm btn-outline-primary" 
                target="_blank" 
                rel="noreferrer"
              >
                🌐 Visita sito
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default UsersList;

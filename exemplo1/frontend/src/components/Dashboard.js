// frontend/src/components/Dashboard.js
import React from 'react';
import Button from './Button';
import ROLES from '../utils/roles';

const Dashboard = () => {
  const userRole = ROLES.ADMIN; // Mude para ROLES.USER para testar como um usuário

  const handleAdminClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin');
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUserClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/user');
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button userRole={userRole} allowedRoles={[ROLES.ADMIN]} onClick={handleAdminClick}>
        Admin Button
      </Button>
      <Button userRole={userRole} allowedRoles={[ROLES.USER, ROLES.ADMIN]} onClick={handleUserClick}>
        User Button
      </Button>
    </div>
  );
};

export default Dashboard;

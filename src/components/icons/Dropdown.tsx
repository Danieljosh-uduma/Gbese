import { useState } from 'react';
import '../icons/styles/Dropdown.css'

export default function Dropdown() {
  const [value, setValue] = useState('');

  return (
    <select id="mySelect" value={value} onChange={(e) => setValue(e.target.value)}>
      <option></option>
      <option value="profile">Profile</option>
      <option value="settings">Settings</option>
      <option value="logout">Logout</option>
    </select>
  );
};



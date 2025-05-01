import React, { useState } from 'react';
import axios from 'axios';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const changePassword = () => {
    axios.put('https://full-stack-nodejs-project-e0f82c08a823.herokuapp.com/auth/changepassword', {
      oldPassword: oldPassword,
      newPassword: newPassword,
    },
      {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      }
    ).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      }
    });
  }
  return (
    <div>
      <h1>ChangePasswor</h1>
      <input type="text" placeholder='Old Password...'
        onChange={(event) =>
          setOldPassword(event.target.value)}
      />
      <input type="text" placeholder='New Password...'
        onChange={(event) =>
          setNewPassword(event.target.value)}
      />
      <button onClick={changePassword}>Change</button>
    </div>
  )
}

export default ChangePassword
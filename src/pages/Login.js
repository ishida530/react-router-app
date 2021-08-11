import React from 'react';
const Login = () => {
    return (
        <div style={{ color: "black", display: "flex", flexDirection: 'column' }}>
            <label >Podaj nazwe admina <input type="text" /></label>
            <label >Podaj haslo  <input type="text" /></label>
            <button style={{ width: 120, marginTop: 20 }}>zaloguj</button>
        </div>);
}

export default Login;
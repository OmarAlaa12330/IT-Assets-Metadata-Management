import './App.css';

function UserLogin() {
  return (
    <div className="UserLogin" style={{ marginLeft: '15%', padding: '1px 16px', height: '1000px' }}>
      <head>
        <title>User Login</title>
      </head>
        <h1>Log into your account</h1>
        <form>
          <label for="userName">Enter your username:</label>
          <p></p>
          <input type="text" id="userName" name="user" required/>
          <p></p>
          <label for="passWord">Enter your password:</label>
          <p></p>
          <input type="password" id="passWord" name="pass" required/>
          <p></p>
          <button type="submit">Register User</button>
        </form>
    </div>
  );
}

export default UserLogin;

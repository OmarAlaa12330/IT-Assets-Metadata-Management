import './App.css';

function NewUser() {
  return (
    <div className="NewUser">
      <head>
        <title>User Registration</title>
      </head>
      <body>
        <h1>Registering a New User</h1>
        <form>
          <label for="userName">Enter a new username:</label>
          <p></p>
          <input type="text" id="userName" name="user" required/>
          <p></p>
          <label for="passWord">Enter your password:</label>
          <p></p>
          <input type="password" id="passWord" name="pass" required/>
          <p></p>
          <button type="submit" onclick="handleButtonClick(id)" name="button">Register User</button>
        </form>
      </body>
    </div>
  );
}

export default NewUser;
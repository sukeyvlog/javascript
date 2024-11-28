<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="register.css">
</head>
<body>
    <div class="container">
       <h2>Register Now </h2> 
       <form id="Register">
        <div class="login">
            <label for="Username">Username</label>
            <input type="text" id="username" name="username" required>
            <span class="error-message" id="usernameError"></span>
        </div>
        <div class="login">
            <label for="Email">Email Address</label>
            
            <input type="email" id="Email" name="Email" required
            placeholder="text@gmail.com">
            <span class="error-message" id="EmailError"></span>
        </div>
        <div class="login">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" min="18" max="60" required>
             <span class="error-message" id="ageError"></span>
        </div>
        <div class="login">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <span class="error-message" id="passwordError"></span>
        </div>
        <div class="login">
            <label for="confirm password">confirm Password:</label>
            <input type="password" id="confirm password" name="confirm password" required>
            <span class="error-message" id="confirm passwordError"></span>
        </div>

       <div class="login">
        <label for="Role">Role</label>
        <select name="Role" id="Role">
            <option value="Admin">Admin</option>
            <option value="user">user</option>
        </select>
        <span class="error-message" id="RoleError"></span>
    
       </div>
       <div class="ok">
       <button type="submit">Log in</a></button>   
    </div>
    <a href="/project1/login/login.php">Back</a>
    </form>
    </div>
 
    <script src="register.js"></script>
</body>
</html>
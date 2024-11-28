<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Task Management System</title>
    <link rel="stylesheet" href="./login.css">
   
</head>
<body>

    <div class="login-container">
        <h2>Welcome to TMS</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <span class="error-message" id="usernameError"></span>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <span class="error-message" id="passwordError"></span>
            </div>
            <div class="form-group">
                <label for="Role">Role:</label>
                <select name="role" id="role">
               <option value="admin">admin</option>
               <option value="user">user</option>
               </select>
            </div>
            <div class="ok">
            <button type="submit">login</a></button>
        </div>
            <div class="form-group">
                <label for="register"> <a href="/project1/register/register.php">Register Now</a></label>          
            </div>
        </form>
    </div>
<script src="login.js"></script>
</body>
</html>

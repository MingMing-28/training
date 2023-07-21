import React from "react";
import ReactDOM from "react-dom";
import './style/index.css'
const App = () => {
  return (
    <>
      <body>
        <div class="grid-container">
            <div class="login-container">
                <h2>Login</h2>
                <form action="/login" method="post">
                    <div class="login">
                        <div class="group">
                            <label for="username">Username:</label>
                            <br />
                            <input type="text" name="username" value="Type your username"/>
                        </div>
                        <div class="group">
                            <label for="password">Password:</label>
                            <br />
                            <input type="text" name="password" value="Type your password"/>
                        </div>
                        <div class="group">
                             <input type="checkbox" name="remember"/> 
                             <label for="remember">Remember me</label>
                        </div>
                       
                        <div class="group"> 
                            <input type="submit" value="LOGIN"/> 
                        </div>
                       
                    </div>
                </form>
            </div>        
            <div class="steps">
                <h4>Steps</h4>
                <ul>
                    <li>Enter your username</li>
                    <li>Enter your password
                        <ul>
                            <li>Click Remember me to save your password</li>
                        </ul>
                    </li>
                    <li>Click Login</li>
                </ul>
            </div>
        </div>  
    </body>
    </>
  )
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
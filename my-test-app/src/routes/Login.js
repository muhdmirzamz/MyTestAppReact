import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css'
import { useEffect } from "react";
import axios from "axios";

const Login = () => {

    let navigate = useNavigate()

    useEffect(() => {
        /*
        axios.get("http://localhost:9000/test").then(res => {
            console.log(res)
        })
        */
    }, [])

    const hello = () => {
      navigate(`home/`)  
    }    

    return (
        <div className="App">

            <h1>Hello React Router</h1>
            
            <div className="login-container">
                <div className="first-half">
                    
                </div>

                <div className="second-half">
                    <p>Username</p>
                    <input type="text" />
                    <button onClick={() => hello()}>Log in</button>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                    <Link to={`contact/`}>Your Name</Link>
                    </li>
                    <li>
                    <Link to={`about/`}>About</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Login
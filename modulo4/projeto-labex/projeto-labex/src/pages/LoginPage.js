import axios from "axios"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";




function LoginPage () {
    const [email,setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChageEmail = (event) => {
        setMail(event.target.value)
    };

    const onChangePassword = (event) => {
        setPassword (event.target.value)
    };

    const sendLogin = () => {
        const URL = 
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/login";

        const body = {
            email: email,
            password: password
        };
             
        axios.post(URL, body)
        .then((res) => {
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            navigate("/admin/trips/list")
        })
        .catch((err) => {
            console.log(err.response.data);
        })
    }

    return (
        <div>
            <div>
                <input
                    type="email"
                    placeholder="e-mail"
                    value ={email}
                    onChange = {onChageEmail}
                 />
            </div>

            <div>
                <input 
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={onChangePassword}
                />
                
            </div>

            <div>
               <button onClick={sendLogin}>
                Enviar
               </button>
            </div>
          
        </div>
    )
}

export default LoginPage;
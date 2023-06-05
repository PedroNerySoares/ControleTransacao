import { useState } from 'react'
import './styles.css'
import Http from '../../http'
import { eventManager } from 'react-toastify/dist/core'
export default function Main() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        // console.log("submit", { email, password })

        Http.post("login", {
            "usuario": email,
            "senha": password

        }).then(response => (

            localStorage.setItem('token', response.data.token)
        ))
    }

    const handleExit = () => {
      
        localStorage.removeItem('token');

    }

    handleExit();

    return (

        <div id="login">

            <h1>Login do Sistema</h1>
            <form className="form" onSubmit={(e) => { handleSubmit(e.nativeEvent) }}>
                <div className="field">
                    <label htmlFor="email">email</label>
                    <input type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => (setPassword(e.target.value))}
                    />
                </div>
                <div className="action">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
};



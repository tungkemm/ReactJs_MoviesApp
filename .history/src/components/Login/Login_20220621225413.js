import React, {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form>
            <div onSubmit={handleSubmit}>
                <p>Ten dang nhap</p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <p>Mat khau</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login
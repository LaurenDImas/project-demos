import React, {useState} from 'react'
// import '../../form.css'


const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = e => {
        e.preventDefault();

        if (username.length > 8) {
            setErrorUsername('')
            setUserColor("green")
        }else{
            setErrorUsername('Username must be 8 letters long.');
            setUserColor("red")
        }

        if (email.includes('@gmail.com')) {
            setErrorEmail('')
            setUserColor('green')
        }else{
            setErrorEmail(' Email should have @gmail.com.')
            setUserColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('')
            setUserColor('green')
        }else{
            setErrorPassword('Password must be 8 letters long.');
            setUserColor('red')
        }

        // console.log(password)
        console.log(password !== '' && password === confirmPassword)
        // dimas.yogi.777@gmail.com
        if (password !== '' && password === confirmPassword) {
            setConfirmPassword('')
            setConfirmPasswordColor('green')
        }else{
            console.log(1)
            setErrorConfirmPassword("Password didn't match");
            setConfirmPasswordColor('red')
        }
    }
    return (
        <>
            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{borderColor: userColor}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className="error">{errorUsername}</p>

                    <input
                        type="text"
                        placeholder="Email"
                        style={{borderColor: emailColor}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error">{errorEmail}</p>

                    <input
                        type="password"
                        placeholder="Password"
                        style={{borderColor: passwordColor}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="error">{errorPassword}</p>

                    <input
                        type="password"
                        placeholder="Confirm password"
                        style={{ borderColor: confirmPasswordColor }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="error">{errorConfirmPassword}</p>

                    <button className="submit-btn" onClick={validate}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form

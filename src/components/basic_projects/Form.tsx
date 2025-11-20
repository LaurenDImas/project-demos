import {useState} from 'react'
// import '../../form.css'

type FieldState = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Form = () => {
    const [form, setForm] = useState<FieldState>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [error, setError] = useState<FieldState>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [color, setColor] = useState<FieldState>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => ({...prevState, [name]: value }))
        if (form[name].length > 8) {
            setError(prevState => ({...prevState, [name]: ''}))
            setColor(prevState => ({...prevState, [name]: 'green'}))
        }else{
            setError(prevState => ({...prevState, [name]: 'Username must be 8 letters long.'}))
            setColor(prevState => ({...prevState, [name]: 'red'}))
        }
    }

    const validate = e => {
        e.preventDefault();
        if (form.username.length > 8) {
            setError(prevState => ({...prevState, username: ''}))
            setColor(prevState => ({...prevState, username: 'green'}))
        }else{
            setError(prevState => ({...prevState, username: 'Username must be 8 letters long.'}))
            setColor(prevState => ({...prevState, username: 'red'}))
        }
        //
        // @ts-ignore
        if (form.email.includes('@gmail.com')) {
            setError(prevState => ({...prevState, email: ''}))
            setColor(prevState => ({...prevState, email: 'green'}))
        }else{

            setError(prevState => ({...prevState, email: 'Email should have @gmail.com.'}))
            setColor(prevState => ({...prevState, email: 'red'}))
        }
        //
        // if (form.password.length > 8) {
        //     setErrorPassword('')
        //     setUserColor('green')
        // }else{
        //     setErrorPassword('Password must be 8 letters long.');
        //     setUserColor('red')
        // }
        //
        // if (form.password !== '' && password === confirmPassword) {
        //     setConfirmPassword('')
        //     setConfirmPasswordColor('green')
        // }else{
        //     console.log(1)
        //     setErrorConfirmPassword("Password didn't match");
        //     setConfirmPasswordColor('red')
        // }
    }
    return (
        <>
            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="Name"
                        style={{borderColor: color.username, color: color.username}}
                        value={form.username}
                        onChange={handleChange}
                    />
                    <p className="error">{error.username}</p>

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        style={{borderColor: color.email, color: color.email}}
                        value={form.email}
                        onChange={handleChange}
                    />
                    <p className="error">{error.email}</p>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        style={{borderColor: color.password, color: color.password}}
                        value={form.password}
                        onChange={handleChange}
                    />
                    <p className="error">{error.password}</p>

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        style={{ borderColor: color.confirmPassword, color: color.confirmPassword }}
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <p className="error">{error.confirmPassword}</p>

                    <button className="submit-btn" onClick={validate}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form

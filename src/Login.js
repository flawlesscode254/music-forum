import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './Firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logog">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" 
                    alt="" 
                />
            </div>
            <Button
                type="submit"
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login

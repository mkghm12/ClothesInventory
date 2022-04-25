import { useState } from "react";
import { createUserDocumentfromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
const defaultFormData = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formdata, setformdata] = useState(defaultFormData);
    const { email, password } = formdata;

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setformdata({ ...formdata, [name]: value });
    }

    const clearFormFields = () => {
        setformdata(defaultFormData);
    }

    const onSubmitFormHandler = async (event) => {
        event.preventDefault();
        const { email, password } = formdata;
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            clearFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('Not able to find user')
                    break;
                case 'auth/wrong-password':
                    alert('password is wrong');
                    break;
                default:
                    console.log("user SignIn failed", error.code);
                    break;
            }
        }

    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentfromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h1>Already have an account?</h1>
            <span>Sign In with Email and Password</span>
            <form onSubmit={onSubmitFormHandler}>
                <FormInput label="Email" required type="text" value={email} name="email" onChange={changeHandler} />
                <FormInput label="Password" required type="password" value={password} name="password" onChange={changeHandler} />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
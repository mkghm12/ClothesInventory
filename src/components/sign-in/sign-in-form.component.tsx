import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, Heading1, SignInContainer } from "./sign-in-form.styles";
const defaultFormData = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formdata, setformdata] = useState(defaultFormData);
    const { email, password } = formdata;
    const dispatch = useDispatch();
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setformdata({ ...formdata, [name]: value });
    }

    const clearFormFields = () => {
        setformdata(defaultFormData);
    }

    const onSubmitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            dispatch(emailSignInStart);
            clearFormFields();
        } catch (error) {
            switch ((error as AuthError).code) {
                case AuthErrorCodes.USER_DELETED:
                    alert('Not able to find user')
                    break;
                case AuthErrorCodes.INVALID_PASSWORD:
                    alert('password is wrong');
                    break;
                default:
                    console.log("user SignIn failed", AuthErrorCodes);
                    break;
            }
        }

    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    return (
        <SignInContainer>
            <Heading1>Already have an account?</Heading1>
            <span>Sign In with Email and Password</span>
            <form onSubmit={onSubmitFormHandler}>
                <FormInput label="Email" required type="text" value={email} name="email" onChange={changeHandler} />
                <FormInput label="Password" required type="password" value={password} name="password" onChange={changeHandler} />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;
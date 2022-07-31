import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpStart } from "../../store/user/user.action";
import { userSelector } from "../../store/user/user.selector";
import FormInput from "../form-input/form-input.component";
import { CustomButton, Heading1, SignUpContainer } from "./sign-up-form.styles";
const defaultFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formdata, setformdata] = useState(defaultFormData);
    const { displayName, email, password, confirmPassword } = formdata;
    const currentUser = useSelector(userSelector);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    if (currentUser) {
        navigate("/");
    }
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setformdata({ ...formdata, [name]: value });
    }
   
    const clearFormFields = () => {
        setformdata(defaultFormData);
    }

    const onSubmitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, confirmPassword } = formdata;
        if (password !== confirmPassword) {
            alert("password does not match");
            return;
        }
        try {
            dispatch(signUpStart(email,password,displayName));
            clearFormFields();

        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Email Already in Use, cannot use this email");
            } else {
                console.log("user creation failed", AuthErrorCodes);
            }
        }

    }
    return (
        <SignUpContainer>
            <Heading1>Don't have an account?</Heading1>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={onSubmitFormHandler}>
                <FormInput label="Display Name" required type="text" value={displayName} name="displayName" onChange={changeHandler} />
                <FormInput label="Email" required type="text" value={email} name="email" onChange={changeHandler} />
                <FormInput label="Password" required type="password" value={password} name="password" onChange={changeHandler} />
                <FormInput label="Confirm Password" required type="password" value={confirmPassword} name="confirmPassword" onChange={changeHandler} />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;
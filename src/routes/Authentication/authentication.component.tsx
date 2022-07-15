import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";
const Authentication = () => {
    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const response = await getRedirectResult(auth);
    //         // console.log(response);
    //         if (response) {
    //             console.log(createUserDocumentfromAuth(response.user));
    //         }
    //     }
    //     fetchdata();
    // }, []);
    // const logUserWithGoogleRedirect = async () => {
    //     await signInWithGoogleRedirect();
    // }


    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication;
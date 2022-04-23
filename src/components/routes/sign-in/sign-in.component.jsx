import {  signInWithGooglePopup, createUserDocumentfromAuth } from "../../../utils/firebase/firebase.util"

const SignIn = () => {
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


    const logUserWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(createUserDocumentfromAuth(user));
    }
    // const logUserWithGoogleRedirect = async () => {
    //     await signInWithGoogleRedirect();
    // }
    return (
        <div>
            <h1>Go To SignIn Page</h1>
            <button onClick={logUserWithGoogle}>click to sign in via popup</button>
            {/* <button onClick={logUserWithGoogleRedirect}>click to sign in via redirect</button> */}
        </div>
    )
}

export default SignIn
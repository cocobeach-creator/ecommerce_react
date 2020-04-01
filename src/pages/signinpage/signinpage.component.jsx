import React from "react";
import "./signinpage.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInPage = () => (
    <div className="signin">
    <SignIn/>
    <SignUp/>
    </div>
);

export default SignInPage;
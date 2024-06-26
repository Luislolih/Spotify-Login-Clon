import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Toggle from "../Toggle/Toggle";
import logo from "./logo-gloomy-web.png";
import styles from "./LoginForm.module.css";
import { useContext } from "react";
import ErrorLogin from "../ErrorLogin/ErrorLogin";
import Successful from "../Successful/Successful";
import ButtonForm from "../ButtonForm/ButtonForm";
import { UsersContext } from "../../ContextUsers/ContextUsers";
import { Link } from "react-router-dom";
import ButtonSocialMedia from "../ButtonSocialMedia/ButtonSocialMedia";
const LoginForm = () => {
    const { users } = useContext(UsersContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showErrorLogin, setShowErrorLogin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };
    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const isValidUser = users.some(
            (user) => user.email === email && user.password === password
        );

        if (isValidUser) {
            setIsAuthenticated(true);
        } else {
            setShowErrorLogin(true);
        }
    };
    return (
        <>
            {!isAuthenticated && (
                <form className={styles.mainLoginForm} onSubmit={handleLogin}>
                    <img className="w-2/3 mb-5" src={logo}></img>

                    <div className="w-full flex flex-col gap-2.5">
                        <ButtonSocialMedia
                            src="google"
                            content={"Log in with Google"}
                            type="button"
                        ></ButtonSocialMedia>
                        <ButtonSocialMedia
                            src="facebook"
                            content={"Log in with Facebook"}
                            type="button"
                        ></ButtonSocialMedia>
                        <ButtonSocialMedia
                            src="apple"
                            content={"Log in with Apple"}
                            type="button"
                        ></ButtonSocialMedia>
                    </div>
                    {showErrorLogin && (
                        <ErrorLogin errorMesage="Incorrect username or password." />
                    )}
                    <div className={styles.orContainer}>
                        <div className="bg-textColor border-b w-full"></div>
                        <p className="text-textColor">OR</p>
                        <div className="bg-textColor border-b w-full"></div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <InputForm
                            placeholder="Email"
                            type="text"
                            value={email}
                            error="You must enter an email"
                            onChange={handleEmail}
                        />

                        <InputForm
                            placeholder="Password"
                            type="password"
                            value={password}
                            error="You must enter a password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className={styles.rememberContainer}>
                        <p className="text-textColor">Remember me</p>
                        <Toggle />
                    </div>

                    <div className="w-1/3">
                        <ButtonForm
                            content={"LOG IN"}
                            colorButton="green"
                            type="submit"
                        ></ButtonForm>
                    </div>
                    <p
                        to="/register"
                        className="text-white border-b hover:text-spotifyGreen hover:border-spotifyGreen text-sm cursor-pointer"
                    >
                        Forgot your password?
                    </p>
                    <div className="bg-textColor border-b w-full"></div>
                    <div className="flex w-full justify-between text-textColor text-sm">
                        <p>Don't have an account?</p>
                        <Link
                            to="/register"
                            className="text-white border-b hover:text-spotifyGreen hover:border-spotifyGreen"
                        >
                            Sign up for Gloomy.
                        </Link>
                    </div>
                </form>
            )}

            {isAuthenticated && <Successful text="Login Success!" />}
        </>
    );
};

export default LoginForm;

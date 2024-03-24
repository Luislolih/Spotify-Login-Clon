import { IoAlertCircle } from "react-icons/io5";
const ErrorLogin = () => {
    return (
        <div className="flex justify-start items-center gap-1 text-sm  bg-red-600 px-3 py-2 rounded-sm w-full mt-3">
            <IoAlertCircle className="bg-red-600 text-white" />

            <p className="bg-red-600 text-white">
                Incorrect username or password.
            </p>
        </div>
    );
};

export default ErrorLogin;

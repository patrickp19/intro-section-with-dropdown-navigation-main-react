import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const Register = () => {
  return (
    <div>
      {/* <h1>Registration Page</h1> */}
      <SignUpForm />
    </div>
  );
};

export default Register;

import { createLogic } from "redux-logic";
import auth from "@react-native-firebase/auth";
import { signup, signupSuccess, signupFailure } from "./slice";

const signupLogic = createLogic({
  type: signup.type,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const { email, password } = action.payload;
      let isSuccess = false;
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
         console.log("Successfully account created!!!!")
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
            // dispatch(signupFailure("That email address is already in use!"));
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
            // dispatch(signupFailure("That email address is invalid!"));
          }
          console.error(error);
        });
      const user = { email };

      dispatch(
        signupSuccess({
          user,
          message: "Your account has been successfully created!",
        })
      );
    } catch (err) {
      dispatch(signupFailure(err));
    }
    done();
  },
});

export default [signupLogic];

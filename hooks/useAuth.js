import axios from "axios";
import { useDispatch } from "react-redux";
import authSlice from "../app/logic/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const signin = async ({ username, password }) => {
    try {
      // const formData = new FormData();
      dispatch(authSlice.actions.setUserLoading());
      const params = new URLSearchParams();
      params.append("Username", username);
      params.append("Password", password);
      params.append("grant_type", "password");
      const res = await axios.post(
        "https://api-demowebsite.cdktcnqn.edu.vn/api/oauth/token",
        params
      );
      dispatch(authSlice.actions.setUserSuccess(res.data));
    } catch (error) {
      dispatch(authSlice.actions.setUserFailure(error.response.data.error));
    }
  };

  const signup = async ({
    username,
    password,
    rePassword,
    fullname,
    email,
    phone,
    referralcode,
  }) => {
    try {
      const res = axios.post(
        "https://api-demowebsite.cdktcnqn.edu.vn/api/POST-api-appUser-add",
        {
          username,
          password,
          rePassword,
          fullname,
          email,
          phone,
          referralcode,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { signin, signup };
};

export default useAuth;

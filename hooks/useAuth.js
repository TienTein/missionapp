import axios from "axios";
import { useDispatch } from "react-redux";
import authSlice from "../app/logic/authSlice";
import { toast } from "react-toastify";
import { getConfigUrl } from "@/utils/getConfig";

const useAuth = () => {
  const dispatch = useDispatch();

  const signin = async ({ username, password }) => {
    const apiHost = await getConfigUrl();
    try {
      // const formData = new FormData();
      dispatch(authSlice.actions.setUserLoading());
      const params = new URLSearchParams();
      params.append("Username", username);
      params.append("Password", password);
      params.append("grant_type", "password");
      const res = await axios.post(`${apiHost}oauth/token`, params);
      dispatch(authSlice.actions.setUserSuccess(res.data));
      toast.success("Đăng nhập thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      {
        error.response.data.error === "invalid_grant"
          ? toast.error("Tài khoản hoặc mật khẩu không chính xác", {
              position: toast.POSITION.TOP_CENTER,
            })
          : null;
      }
      dispatch(authSlice.actions.setUserFailure(error.response.data.error));
    }
  };

  const getAccessTokenFromGoogle = async (code) => {
    const formData = new FormData();
    formData.append("code", code);
    formData.append("client_id", "YOUR_CLIENT_ID");
    formData.append("client_secret", "YOUR_CLIENT_SECRET");
    formData.append("redirect_uri", "YOUR_REDIRECT_URI");
    formData.append("grant_type", "authorization_code");

    try {
      const response = await axios.post(
        `${api_host}get-access-token`,
        formData
      );
      return response.data.access_token;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return { signin, getAccessTokenFromGoogle };
};

export default useAuth;

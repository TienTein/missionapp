import axios from "axios";
import { useDispatch } from "react-redux";
import missionSlice from "../app/logic/missionSlice";
import { toast } from "react-toastify";

const useMisison = () => {
  const dispatch = useDispatch();

  const getMissionDatas = async () => {
    try {
      dispatch(missionSlice.actions.setMissionLoading());
      const res = await axios.get(
        "https://api-demowebsite.cdktcnqn.edu.vn/api/Campaign/getallclient"
      );
      dispatch(missionSlice.actions.setMissionSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const postMissionVideoUser = async ({
    Active,
    CreateDate,
    CreateUser,
    UserId,
    CampaignId,
    token,
  }) => {
    const data = {
      Active: Active,
      CreateDate: CreateDate,
      CreateUser: CreateUser,
      UserId: UserId,
      CampaignId: CampaignId,
    };
    try {
      dispatch(missionSlice.actions.setMissionLoading());
      const res = await axios.post(
        "https://api-demowebsite.cdktcnqn.edu.vn/api/UserCampaign/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Nhận điểm thành công!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(missionSlice.actions.setMissionSuccess(res.data));
    } catch (error) {
      {
        error.response.data.Message ===
        "Authorization has been denied for this request."
          ? toast.error(
              "Phiên đăng nhập của bạn đã kết thúc. Xin hãy đăng nhập lại!!",
              {
                position: toast.POSITION.TOP_CENTER,
              }
            )
          : null;
      }
      dispatch(missionSlice.actions.setMissionFailure(error.response.data));
    }
  };

  return { getMissionDatas, postMissionVideoUser };
};

export default useMisison;

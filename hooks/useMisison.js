import axios from "axios";
import { useDispatch } from "react-redux";
import missionSlice from "../app/logic/missionSlice";

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
  return { getMissionDatas };
};

export default useMisison;

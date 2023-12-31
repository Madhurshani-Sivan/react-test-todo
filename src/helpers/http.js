import axios from "axios";
import { headerToken } from "../configs/core-configs";

const httpRequest = async (apiURL, httpMethod = "get", body = {}) => {
  try {
    const data = await axios({
      url: apiURL,
      method: httpMethod,
      data: body,
      headers: {
        Authorization: `Bearer ${headerToken}`,
      },
    });

    return data.data;
  } catch (error) {
    console.log("Error-", error.info?.message);
    return null;
  }
};

export { httpRequest };

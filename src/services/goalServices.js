import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";
const token = localStorage.getItem("token");

const addGoal = async (goalData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/goals`,
      {
        ...goalData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    );

    const { createdGoal } = response.data;

    return createdGoal;
  } catch (error) {
    throw error;
  }
};

const getGoals = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/goals/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    const { goals } = response.data;

    return goals;
  } catch (error) {
    throw error;
  }
};

export { addGoal, getGoals };

import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";
const token = localStorage.getItem("token");

const addFood = async (foodData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/foods`,
      {
        ...foodData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    );

    const { createdFood } = response.data;

    return createdFood;
  } catch (error) {
    throw error;
  }
};

const getFoods = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/foods/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    const { foods } = response.data;

    return foods;
  } catch (error) {
    throw error;
  }
};

export { addFood, getFoods };

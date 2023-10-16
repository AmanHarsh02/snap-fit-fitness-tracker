import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises } from "../redux/actions/exerciseActions";
import { getAllFoods } from "../redux/actions/foodActions";
import { getAllGoals } from "../redux/actions/goalActions";
import randomColor from "randomcolor";

export const Dashboard = () => {
  const exercises = useSelector((state) => state.exerciseState.exercises);
  const foods = useSelector((state) => state.foodState.foods);
  const goals = useSelector((state) => state.goalState.goals);
  const { _id: userId } = useSelector((state) => state.authState.user);
  const dispatch = useDispatch();
  const random = () => randomColor({ luminosity: "light", format: "hex" });
  const colors = [random(), random(), random(), random()];

  useEffect(() => {
    if (exercises.length <= 0 && foods.length <= 0 && goals.length <= 0) {
      dispatch(getAllExercises(userId));
      dispatch(getAllFoods(userId));
      dispatch(getAllGoals(userId));
    }
  }, []);

  const totalCaloriesBurned = exercises.reduce(
    (total, curr) => (total += curr.caloriesBurned),
    0
  );

  const totalCaloriesConsumed = foods.reduce(
    (total, curr) => (total += curr.calories),
    0
  );

  const totalCaloriesGoal = goals.reduce(
    (total, curr) => (total += curr.targetCaloriesValue),
    0
  );

  const remaningCaloriesToGoal = totalCaloriesGoal - totalCaloriesConsumed;

  return (
    <div className="p-4 md:max-w-[60%] m-auto">
      <h1>Summary:</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 py-6">
        <div
          style={{ backgroundColor: colors[0] }}
          className="flex flex-col items-center justify-center p-4 py-8 rounded-md shadow-lg"
        >
          <h3>Total Calories Burned</h3>
          <strong>{totalCaloriesBurned.toLocaleString()}</strong>
        </div>
        <div
          style={{ backgroundColor: colors[1] }}
          className="flex flex-col items-center justify-center p-4 py-8 rounded-md shadow-lg"
        >
          <h3>Total Calories Consumed</h3>
          <strong>{totalCaloriesConsumed.toLocaleString()}</strong>
        </div>
        <div
          style={{ backgroundColor: colors[2] }}
          className="flex flex-col items-center justify-center p-4 py-8 rounded-md shadow-lg"
        >
          <h3>Total Calories Goal</h3>
          <strong>{totalCaloriesGoal.toLocaleString()}</strong>
        </div>
        <div
          style={{ backgroundColor: colors[3] }}
          className="flex flex-col items-center justify-center p-4 py-8 rounded-md shadow-lg"
        >
          <h3>Remaining Calories to Goal</h3>
          <strong>{remaningCaloriesToGoal.toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
};

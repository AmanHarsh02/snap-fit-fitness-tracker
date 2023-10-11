import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises } from "../redux/actions/exerciseActions";

export const Dashboard = () => {
  const exercises = useSelector((state) => state.exerciseState.exercises);
  const { _id: userId } = useSelector((state) => state.authState.user);
  const dispatch = useDispatch();

  const debouncedGetAllExercises = useCallback(() => {
    if (exercises.length <= 0) {
      dispatch(getAllExercises(userId));
    }
  }, [exercises, userId, dispatch]);

  useEffect(() => {
    const timer = setTimeout(debouncedGetAllExercises, 0);

    return () => clearTimeout(timer);
  }, [debouncedGetAllExercises]);

  return (
    <div className="p-4 border-2 border-black">
      <h1>Dashboard Page</h1>
    </div>
  );
};

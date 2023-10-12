import { useDispatch, useSelector } from "react-redux";
import { allExercises, durationInMinutes } from "../utils/exerciseUtils";
import {
  addNewExercise,
  exerciseInput,
} from "../redux/actions/exerciseActions";
import { ExerciseCard } from "../components/index";
import { SET_EXERCISE_ERROR } from "../redux/actionConstants";
import { useEffect } from "react";
import { gradientColor, gradientColorOnHover } from "../utils/gradientColors";

export const Exercises = () => {
  const { _id: userId } = useSelector((state) => state.authState.user);
  const userInput = useSelector((state) => state.exerciseState.exerciseInput);
  const error = useSelector((state) => state.exerciseState.exerciseError);
  const exercises = useSelector((state) => state.exerciseState.exercises);
  const exerciseCardColors = useSelector(
    (state) => state.exerciseState.exerciseCardColors
  );
  const dispatch = useDispatch();

  const exerciseList = ["Select an exercise", ...Object.keys(allExercises)];
  const durationList = ["Select duration", ...durationInMinutes];

  const handleAddExercise = () => {
    dispatch(addNewExercise(userInput, userId));
  };

  useEffect(() => {
    return function () {
      dispatch({ type: SET_EXERCISE_ERROR, payload: "" });
    };
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h2>Add a new exercise:</h2>

      <div className="flex gap-2">
        <select
          onChange={(e) =>
            dispatch(
              exerciseInput({
                ...userInput,
                exerciseName: e.target.value,
              })
            )
          }
          value={userInput.exerciseName}
          className="border-2 outline-2 outline-blue-500 rounded-md"
        >
          {exerciseList.map((exercise) => {
            return (
              <option key={exercise} className="bg-blue-100">
                {exercise}
              </option>
            );
          })}
        </select>

        <select
          onChange={(e) =>
            dispatch(
              exerciseInput({
                ...userInput,
                durationMinutes: e.target.value,
              })
            )
          }
          value={userInput.durationMinutes}
          className="border-2 outline-2 outline-blue-500 rounded-md"
        >
          {durationList.map((duration, i) => {
            return (
              <option key={duration} className="bg-blue-100">
                {duration} {i > 0 ? "mins" : ""}
              </option>
            );
          })}
        </select>

        <button
          onClick={handleAddExercise}
          className={`text-white ${gradientColor} ${gradientColorOnHover} px-4 rounded-md`}
        >
          Add
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}

      <h2>All Exercises:</h2>

      <div className="flex flex-wrap gap-4">
        {exercises.map((exercise, i) => {
          return (
            <ExerciseCard
              exercise={exercise}
              color={exerciseCardColors[i]}
              key={exercise._id}
            />
          );
        })}
      </div>
    </div>
  );
};

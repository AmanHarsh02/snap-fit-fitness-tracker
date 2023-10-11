import { allExercises } from "../utils/exerciseUtils";

export const ExerciseCard = ({ exercise, color }) => {
  const { _id, exerciseName, durationMinutes, caloriesBurned } = exercise;

  const { emoji } = allExercises[exerciseName];

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col gap-3 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-500 transition-all ease-in-out duration-300"
    >
      <div className="flex gap-8 justify-between">
        <strong>{exerciseName}</strong>
        <p>{emoji}</p>
      </div>

      <div className="flex gap-8 justify-between">
        <p>⌚{durationMinutes} mins</p>
        <p>🔥{caloriesBurned} kcal</p>
      </div>
    </div>
  );
};

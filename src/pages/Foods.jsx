import { gradientColor, gradientColorOnHover } from "../utils/gradientColors";

export const Foods = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2>Add a new food item:</h2>

      <div className="flex gap-2">
        <button
          // onClick={handleAddExercise}
          className={`text-white ${gradientColor} ${gradientColorOnHover} px-4 rounded-md`}
        >
          Add
        </button>
      </div>

      {/* {error && <small className="text-red-600">{`* ${error}`}</small>} */}

      <h2>All Food Items:</h2>

      <div className="flex flex-wrap gap-4"></div>
    </div>
  );
};

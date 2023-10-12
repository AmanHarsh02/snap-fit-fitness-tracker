export const GoalCard = ({ goal, color }) => {
  const {
    _id,
    goalName,
    goalDescription,
    targetDate,
    targetCaloriesValue,
    status,
  } = goal;

  const date = new Date(targetDate);

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col gap-3 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-300 transition-all ease-in-out duration-300"
    >
      <div className="flex gap-8 justify-between">
        <strong>{goalName}</strong>
        <p>{status}</p>
      </div>

      <p>Desc: {goalDescription}</p>

      <div className="flex gap-8 justify-between">
        <p>
          Target Date:{" "}
          {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
        </p>
        <p>Target Calories: {targetCaloriesValue.toLocaleString()}</p>
      </div>
    </div>
  );
};

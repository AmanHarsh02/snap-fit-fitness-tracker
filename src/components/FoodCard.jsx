export const FoodCard = ({ food, color }) => {
  const { _id, foodName, calories, protein, carbohydrates, fat } = food;

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col gap-3 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-300 transition-all ease-in-out duration-300"
    >
      <div className="flex gap-8 justify-between">
        <strong>{foodName}</strong>
        <p>🍜{calories} kcal</p>
      </div>

      <div className="flex gap-8 justify-between">
        <p>P: {protein}gm</p>
        <p>C: {carbohydrates}gm</p>
        <p>F: {fat}gm</p>
      </div>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { userLoginInput } from "../redux/actions/userActions";

const gradientColor = "bg-gradient-to-r from-blue-600 to-violet-500";

const gradientColorOnHover =
  "hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-500 ";

export const Login = () => {
  const userInput = useSelector((state) => state.authState.loginInputFields);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 min-h-[80vh] flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="border-gray border-2 flex flex-col gap-2 w-max py-2 px-4 rounded-md"
      >
        <label className="flex flex-col">
          email:
          <input
            value={userInput.email}
            onChange={(e) =>
              dispatch(userLoginInput({ ...userInput, email: e.target.value }))
            }
            type="text"
            placeholder="enter email"
            className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>
        <label className="flex flex-col">
          password:
          <input
            value={userInput.password}
            onChange={(e) =>
              dispatch(
                userLoginInput({ ...userInput, password: e.target.value })
              )
            }
            type="text"
            placeholder="enter password"
            className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>

        <button
          type="submit"
          className={`text-white ${gradientColor} ${gradientColorOnHover} p-1 rounded-md mt-4`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

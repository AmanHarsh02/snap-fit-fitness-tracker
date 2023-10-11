import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLoginInput } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RESET_LOGIN } from "../redux/actionConstants";
import { gradientColor, gradientColorOnHover } from "../utils/gradientColors";

export const Login = () => {
  const userInput = useSelector((state) => state.authState.loginInputFields);
  const error = useSelector((state) => state.authState.loginError);
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = userInput;

    dispatch(userLogin(email, password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }

    return function () {
      dispatch({ type: RESET_LOGIN });
    };
  }, [isLoggedIn]);

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

        <Link
          to="/signup"
          className="mt-1 max-w-max text-blue-600 hover:underline"
        >
          signup
        </Link>

        {error && <small className="text-red-600">{`* ${error}`}</small>}

        <button
          type="submit"
          className={`text-white ${gradientColor} ${gradientColorOnHover} p-1 rounded-md mt-2`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

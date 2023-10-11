const validateSignupInput = (userDetials) => {
  const { email, password, profilePictureUrl, username } = userDetials;

  if (!email || !password || !profilePictureUrl || !username) {
    return false;
  }

  return true;
};

const validateLoginInput = (email, password) => {
  if (!email || !password) {
    return false;
  }

  return true;
};

const validateExerciseInput = (userInput) => {
  const { exerciseName, durationMinutes } = userInput;

  if (
    !exerciseName ||
    !durationMinutes ||
    exerciseName === "Select an exercise" ||
    durationMinutes === "Select duration"
  ) {
    return false;
  }

  return true;
};

export { validateSignupInput, validateLoginInput, validateExerciseInput };

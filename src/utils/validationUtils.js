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

export { validateSignupInput, validateLoginInput };

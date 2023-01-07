import { PROJECT_NAME_REGEX } from "../const/appConst";

export const isUserNameValid = (username) => {
  if (!username) return;

  const res = PROJECT_NAME_REGEX.exec(username);
  return !!res;
};

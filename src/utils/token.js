const TOKEN_KEY = "jwt";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const handleToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  } else {
    return;
  }
};
export { handleToken };

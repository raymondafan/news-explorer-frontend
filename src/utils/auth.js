const signIn = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = "simulated-token";
      resolve({ token });
    }, 1000);
  });
};
const signUp = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = "simulated-token";
      resolve({ token });
    }, 1000);
  });
};
const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    if (token === "simulated-token") {
      resolve({
        data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
      });
    } else {
      reject("Invalid Token");
    }
  });
};

const auth = {
  signIn,
  signUp,
  checkToken,
};
export default auth;

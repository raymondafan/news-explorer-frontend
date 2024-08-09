const signIn = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: "a fake token" });
    }, 1000);
  });
};
const signUp = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: "a fake token" });
    }, 1000);
  });
};
const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
    });
  });
};

const auth = {
  signIn,
  signUp,
  checkToken,
};
export default auth;

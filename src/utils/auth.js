export const login = (user) => {
  localStorage.setItem("USER", user.email);
  localStorage.setItem("TOKEN", user.token);
};

export const logout = () => {
  localStorage.removeItem("USER");
  localStorage.removeItem("TOKEN");
};

export const isLogin = () => {
  return !!localStorage.getItem("USER");
};

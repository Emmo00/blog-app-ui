export default {
  isAuthenticated: false,
  login() {
    this.isAuthenticated = true;
  },
  logout() {
    this.isAuthenticated = false;
  },
  checkAuth() {
    // Here you would typically check local storage or a cookie
    return this.isAuthenticated;
  },
};

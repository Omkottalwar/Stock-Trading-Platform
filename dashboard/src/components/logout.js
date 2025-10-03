export const logout = () => {
  // Remove token
  localStorage.removeItem("authToken");

  // Optional: Call backend logout API
  fetch("http://localhost:3002/logout", {
    method: "POST",
    credentials: "include",
  });

  // Redirect to frontend login
  window.location.href = "http://localhost:3000/login";
};
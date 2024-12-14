const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.token; // Extract token from cookies

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Pass user details for later use
    next();
  } catch (error) {
    res.clearCookie("token"); // Clear invalid/expired token
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

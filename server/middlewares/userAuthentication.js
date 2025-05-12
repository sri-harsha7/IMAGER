import jwt from "jsonwebtoken";
const userAuthentication = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id; // Set the userId property on the req.body object
    } else {
      return res.json({
        success: false,
        message: "Not authorised login again",
      });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuthentication;

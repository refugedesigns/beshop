const { Router } = require("express");
const {
  authorizePermissions,
  authenticateUser,
  validateUpdateViewedProducts,
} = require("../middlewares");
const {
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
  updateViewedProducts,
  updateWishlist
} = require("../controllers");

const router = Router();

router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);
router.get("/showCurrentUser", authenticateUser, showCurrentUser);
router.patch("/updateUser", updateUser);
router.patch("/updateViewedProducts", authenticateUser, validateUpdateViewedProducts, updateViewedProducts);
router.patch("/updateWishlist", authenticateUser, updateWishlist);
router.patch("/updateUserPassword", updateUserPassword);
router.get("/:id", getSingleUser);

module.exports = router;

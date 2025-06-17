const express= require("express");
const {registercontroller, logincontroller, userInfocontroller, fetchperticularUsercontroller, fetchSuggestionsController, fetchFollowerController, fetchFollowingController, passwordResetController} = require("../controllers/usercontroller");
const {protect} = require("../middleware/authorizationmiddleware");
const { todayBirthdaycontroller, upcomingBirthdayController } = require("../controllers/birthdays");
const { sendRequestController, fetchRequestsController, acceptRequestController, cancelRequestController, checkFollowStatus } = require("../controllers/followrequest");

const router= express.Router();

router.post("/register",registercontroller );
router.post("/signin", logincontroller);
router.post("/profileupdate/:userId", userInfocontroller);
router.get("/find/:username",protect,fetchperticularUsercontroller);
router.get("/suggestions",protect, fetchSuggestionsController);
router.get("/todaybirthday",protect,todayBirthdaycontroller);
router.get("/upcomingbirthdays",protect, upcomingBirthdayController);
router.get("/sendrequestto/:userId",protect, sendRequestController);
router.get("/fetchfollowrequests",protect, fetchRequestsController);
router.get("/acceptrequest/:userId",protect, acceptRequestController);
router.get("/rejectrequest/:userId",protect, cancelRequestController);
router.get("/checkfollowstatus/:userId",protect, checkFollowStatus);
router.get("/fetchFollowers/:username",protect, fetchFollowerController);
router.get("/fetchFollowing/:username",protect, fetchFollowingController);
router.post("/reset-password", passwordResetController);


module.exports= router;

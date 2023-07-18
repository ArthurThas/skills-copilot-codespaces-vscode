//Create web server
// 1. Import express
const express = require("express");
// 2. Create router
const router = express.Router();
// 3. Import controller
const commentsController = require("../controllers/commentsController");

// 4. Create route
router.get("/", commentsController.index);
router.get("/create", commentsController.create);
router.get("/:id", commentsController.show);
router.post("/", commentsController.store);
router.get("/:id/edit", commentsController.edit);
router.put("/:id", commentsController.update);
router.delete("/:id", commentsController.destroy);

// 5. Export router
module.exports = router;
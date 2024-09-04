const express = require("express");
const router = express.Router();

const {
  getPeople,
  getPeopleParams,
  postPeople,
  putPeople,
  deletePeople,
} = require("../controllers/people");

// Define routes
// router.route("/").get(getPeople).post(postPeople);
// router.route("/:id").get(getPeopleParams).put(putPeople).delete(deletePeople);

router.get("/", getPeople);
router.get("/:id", getPeopleParams);
router.post("/", postPeople);
router.put("/:id", putPeople);
router.delete("/:id", deletePeople);

module.exports = router; 

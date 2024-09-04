const express = require("express");
const router = express.Router();
const { people } = require("../data");

//GET
router.get("/", (req, res) => {
  res.status(200).json(people);
});
//GET with Route params
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json(people.filter((person)=> `${person.id}`===id));
  });

//POST
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).json({ succes: true, person: name });
  } else {
    return res.status(401).json({ success: "please provide a valid name" });
  }
});

//PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((item) => `${item.id}` === id);

  console.log(id, name, person);

  if (person) {
    const newPeople = people.map((item) => {
      return `${item.id}` === id ? { ...item, name: name } : item;
    });
    res.status(200).json({ succes: true, data: newPeople });
  } else {
    res.status(400).json({ success: false, msg: `no person with id ${id}` });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => `${person.id}` === id);
    if (!person) {
      return res.status(400).json({ success: false, msg: `No person with id ${id}` });
    }
    const newPeople = people.filter((person) => `${person.id}` !== id);
    res.status(200).json({ success: true, data: newPeople });
  });

module.exports=router

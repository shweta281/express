const { people } = require("../data");  

// Controller functions

//GET
const getPeople = (req, res) => {
  res.status(200).json(people);
};

const getPeopleParams = (req, res) => {
  const { id } = req.params;
  res.status(200).json(people.filter((person) => `${person.id}` === id));
};


//POST
const postPeople = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).json({ success: true, person: name });
  } else {
    return res.status(401).json({ success: false, msg: "Please provide a valid name" });
  }
};


//PUT
const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((item) => `${item.id}` === id);
  if (person) {
    const newPeople = people.map((item) => `${item.id}` === id ? { ...item, name: name } : item);
    res.status(200).json({ success: true, data: newPeople });
  } else {
    res.status(400).json({ success: false, msg: `No person with id ${id}` });
  }
};


//DELETE
const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => `${person.id}` === id);
  if (!person) {
    return res.status(400).json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((person) => `${person.id}` !== id);
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  getPeopleParams,
  postPeople,
  putPeople,
  deletePeople,
}; 

const express = require("express");
const router = express.Router();

const Human = require("../../models/Humans.model");

const getHumanAge = (birthdate) => {
    const currentDate = new Date();
    const birthdateArray = birthdate.split("-");
    const birthYear = parseInt(birthdateArray[0]);
    const birthMonth = parseInt(birthdateArray[1]);
    const birthDay = parseInt(birthdateArray[2]);

    const age = currentDate.getFullYear() - birthYear;

    // Check if the current date has passed the birthdate in the current year
    if (
        currentDate.getMonth() < birthMonth - 1 ||
        (currentDate.getMonth() === birthMonth - 1 &&
            currentDate.getDate() < birthDay)
    ) {
        // Subtract 1 from the age if the birthdate hasn't occurred yet in the current year
        return age - 1;
    }

    return age;
};

router.get("/", (req, res) => {
    res.status(200).send("Root of API");
});

router.get("/humans/all", (req, res) => {
    Human.find()
        .then((human) => res.json(human))
        .catch((err) => res.status(404).json({ message: "No Humans found" }));
});

router.get("humans/:id", (req, res) => {
    Human.findById(req.params.id)
        .then((human) => res.json(human))
        .catch((err) => res.status(404).json({ message: "No Humans found" }));
});

router.post("/humans", (req, res) => {
    const humanInputData = req.body;
    const age = getHumanAge(req.body.birthDate);
    humanInputData["age"] = age;

    Human.create(humanInputData)
        .then((human) => {
            console.log("New Human Added: ", human._id)
            res.json({ message: "Human added successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Unable to add this human" });
        });
});

router.put("/humans/:id", (req, res) => {
    Human.findByIdAndUpdate(req.params.id, req.body)
        .then((human) =>
            res.json({ message: "Human entry edited successfully" })
        )
        .catch((err) =>
            res.status(400).json({ message: "Unable to update this human" })
        );
});

router.delete("/humans/:id", (req, res) => {
    Human.findByIdAndRemove(req.params.id)
        .then((human) =>
            res.json({ message: "Human entry deleted successfully" })
        )
        .catch((err) =>
            res.status(404).json({ message: "Human does not exist" })
        );
});

module.exports = router;

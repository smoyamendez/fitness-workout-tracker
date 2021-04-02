const router = require("express").Router();
const { db } = require("../models/workout.js");
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", ({body}, res) => {
    db.Workout.findOneAndUpdate( 
        { _id: body.id }, 
        { $push: { excercises: body}}, 
        { new: true },
        (err, workouts) => {
            if (err) throw err;
            res.json(workouts);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});


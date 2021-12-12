const { Workout } = require("../models/Health.model");

exports.create = async (req, res) => {
  const { workout, user } = req.body;
  try {
    let newWorkout = new Workout();
    newWorkout.workout = workout;
    newWorkout.patient = user._id;

    newWorkout = await newWorkout.save();

    res.status(200).json({
      successMessage: `${newWorkout.workout} was reported`,
    });
  } catch (err) {
    console.log("sending workout error", err.message);
    res.status(500).json({
      errorMessage: "please try again later",
    });
  }
};

exports.getWorkout = async (req,res) => {
  const {id} = req.params;
 
  try{
    const allWorkout = await Workout.find({patient:id})
    res.json({allWorkout})

  } catch (err) {
    console.log('read workout data error', err);
    res.status(500).json({
      errorMessage:'Please try again later'
    })
  }
}

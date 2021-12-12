const { Sleeping } = require('../models/Health.model')

exports.create = async (req, res) => {
    const {sleeping,user} = req.body;

    try {
        let newSleeping = new Sleeping();
        newSleeping.sleeping = sleeping;
        newSleeping.patient = user._id;
        
        newSleeping = await newSleeping.save();

        res.status(200).json({
            successMessage: `${newSleeping.sleeping} was reported`
        })
    } catch(err) {
        console.log('sending sleeping hours error', err);
        res.status(500).json({
            errorMessage: 'please try again later'
        })
    }
}




exports.getSleeping = async (req,res) => {
    const {id} = req.params;
  
    try{
      const allSleeping = await Sleeping.find({patient:id})
      res.json({allSleeping})
  
    } catch (err) {
      console.log('read sleeping data error', err);
      res.status(500).json({
        errorMessage:'Please try again later'
      })
    }
  }
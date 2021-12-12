const { Water } = require('../models/Health.model')



exports.create = async (req, res) => {
    const {water,user} = req.body;
    console.log(req.body);

    try {
        let newWater = new Water();
        newWater.water = water;
        newWater.patient = user._id;

        newWater = await newWater.save();

        res.status(200).json({
            successMessage: `${newWater.water} was reported`,
            
        })

    } catch(err) {
        console.log('sending water report error', err);
        res.status(500).json({
            errorMessage: 'please try again later'
        })
    }
}


exports.getWater = async (req,res) => {
    const {id} = req.params;
    
    try{
      const allWater = await Water.find({patient:id})
      
      res.json({allWater})
  
    } catch (err) {
      console.log('read water data error', err);
      res.status(500).json({
        errorMessage:'Please try again later'
      })
    }
  }
const { Feeling } = require('../models/Health.model')





exports.create = async (req, res) => {
    const {feeling,user} = req.body;

    try {
        let newFeeling = new Feeling();
        newFeeling.feeling = feeling;
        newFeeling.patient = user._id;

        newFeeling = await newFeeling.save();

        res.status(200).json({
            
            successMessage: `${newFeeling.feeling} was reported`
        })

    } catch(err) {
        console.log('sending feeling error', err);
        res.status(500).json({
            errorMessage: 'please try again later'
        })
    }
}


exports.getFeeling = async (req,res) => {
    const {id} = req.params;
   
    try{
      const allFeeling = await Feeling.find({patient:id})
      res.json({allFeeling})
  
    } catch (err) {
      console.log('read feeling data error', err);
      res.status(500).json({
        errorMessage:'Please try again later'
      })
    }
  }

 
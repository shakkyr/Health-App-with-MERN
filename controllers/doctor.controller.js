const Doc = require('../models/user.model')


exports.getDoctor = async (req,res) => {
    const {special} = req.params;

    
    try{
      
      const doctor = await Doc.find({specalist:special})
      
    res.json({doctor})
  
    } catch (err) {
      console.log('read workout data error', err.message);
      res.status(500).json({
        errorMessage:'Please try again later'
      })
    }
  }

  // exports.getDoctorByCases = async (req,res) => {
  //   const {case} = req.params;
   
  //   try{
  //     const allCases = await Doc.find({cases:id})
  //     res.json({allCases})
  
  //   } catch (err) {
  //     console.log('read cases data error', err);
  //     res.status(500).json({
  //       errorMessage:'Please try again later'
  //     })
  //   }
  // }

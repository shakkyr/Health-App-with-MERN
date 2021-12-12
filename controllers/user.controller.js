const User = require('../models/user.model')




exports.getOneUserData =(req, res) => {
  
        const {id} = req.body
      
          User.find({_id:id}, (err,data)=> {
            if (err){
                res.status(404).json('user isnt exist')
            }
            return res.status(200).json(data)

        })
    }


    exports.readAll = async (req,res) => {
      const {id} = req.params;
      
      try{
        const allUsers = await User.find({})
        res.json({allUsers})
    
      } catch (err) {
        console.log('read workout data error', err);
        res.status(500).json({
          errorMessage:'Please try again later'
        })
      }
    }
    
    



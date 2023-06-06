import Review from "../models/reviewModel.js";

export const reviews = async (req, res,next) => {
    try {
        const review = await Review.create({
            gigId: req.body.gigId,
            userId: req.body.userId,
            star: req.body.star,
            desc: req.body.desc,
        });
  
      await review.save();
      res.status(201).send("Review has been submitted.");
    } catch (err) {
      next(err);
    }
  };

  export const updatereview = async (req, res) => {
    try{
    const review = await Review.updateOne(
        {_id:req.params.id},
        {$set:{
            gigId: req.body.gigId,
            userId: req.body.userId,
            star: req.body.star,
            desc: req.body.desc,
        }})
        if(review){
            res.json(review)
        }
        else{
            res.status(404).json('Review not found')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: "Can't update review"})
    }

};


export const deletereview = async (req, res) => {
    
       await Review.findByIdAndDelete(req.params.id);
       res.status(200).send("Review deleted.");
  
  };

             
export const getreview = async (req, res) => {
    const user = await Review.findById(req.params.id);
    res.json({user});
  };
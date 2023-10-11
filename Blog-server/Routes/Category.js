const category = require("../Models/Category");
function blogCategory(app){
    app.post("/category", async (req, res) => {
        try {
          const newCategory = new category({
            name:req.body.name,
            email:req.body.email,
            keywords:req.body.keywords,
            title:req.body.title,
            blog:req.body.blog,
          });
          const data = await newCategory.save();
          res.status(201).send({ data });
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
      })
app.get("/category",async (req, res)=>{
  try {
    const readData=await category.find();
    if(readData)
    {
      res.status(200).send({readData})
    }
    else
    {
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.delete("/category/:id", async(req, res)=>{
  try {
      const id = req.params.id;
      const blog=await category.deleteOne({_id:id})
      if(blog){
        res.status(200).send({blog})
      }
      else{
        res.status(404).send({
          message:"Blog is Not Deleted"
        })
      }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.put("/category/:id", async(req, res)=>{
  try {
    const id = req.params.id;
    const readData=await category.updateOne({_id:id},{
      $set:{
        name:req.body.name,
        email:req.body.email,
        keywords:req.body.keywords,
        title:req.body.title,
        blog:req.body.blog,
      }
    })
    if(readData){
      res.status(201).send({readData})
    }
    else{
      res.status(404).send({
        message:"Blog is Not updated"
      })
    }
} catch (error) {
  res.status(500).send({ message: error.message });
}
})
app.get("/category/:id",async (req,res)=>{
  try {
    const id=req.params.id;
    const readData=await category.findOne({_id:id});
    if(readData){
      res.status(200).send({readData})
    }
    else{
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.get("/category/search/:search",async(req, res)=>{
  try {
    const data=await category.find({
      $or:[
        {
          name:{$regex:req.params.search},
          email:{$regex:req.params.search},
          keywords:{$regex:req.params.search},
          title:{$regex:req.params.search},
          blog:{$regex:req.params.search},
        },
      ]
    })
    if(data){
      res.status(200).send(data);
    }
    else{
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
} catch (error) {
  res.status(500).send({ message: error.message });
}
})
}

module.exports=blogCategory;
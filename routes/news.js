import express from "express";
import articles from "../data/articles.js";  //articles contains a list of js objects where all objects are news articles.

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("news.ejs",{articles}); //articles is sent to news.ejs so that it can be displayed in a proper formatted manner
    // res.send("Working");
})


router.get('/:slug',(req,res)=>{   //The article ID is based on the data and time of the article combined
    // const slug=req.params.slug;
    const article=articles.find(a=>a.slug===req.params.slug);  // The list in articles is searched for the corresponding js object based on slug==header name of the article and then assign to variable article.
    if(!article) {
        return res.status(404).send("Article not found");
    }
    res.render("article.ejs",{article})   // The variable article from js object articles is sent to article.ejs to be displayed in a proper formatted manner
})

export default router
const article = require('../models/article');


exports.getArticleList = async (req, res, next) => {

    let fetchResult  = await article.fetchAll();
    let fetchData    = await fetchResult[0];
    return res.render('./article/list', {type:'Asyn Method', data:fetchData});
}



exports.getArticleListing = (req, res, next) => {

    return article.fetchAll()
                    .then(([rows, fieldData])=>{
                        res.render('./article/list', {type:'Asyn with then, catch ',data:rows});
                    })
                    .catch(err=>console.log(err));

}
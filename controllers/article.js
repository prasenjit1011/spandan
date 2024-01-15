const article = require('../models/article');


exports.getArticleList = async (req, res, next) => {

    let fetchResult  = await article.fetchAll();
    let fetchData    = await fetchResult[0];
    return res.render('./article/list', {data:fetchData});
}



exports.getArticleListing = (req, res, next) => {

    return article.fetchAll()
                    .then(([rows, fieldData])=>{
                        res.render('./article/list', {data:rows});
                    })
                    .catch(err=>console.log(err));

}
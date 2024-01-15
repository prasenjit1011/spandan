const mysqlConnect = require('../util/mysql_database');

class Article{
    static async fetchAll(){

        const sql = 'SELECT * FROM articles';
        return mysqlConnect.execute(sql);
        return [{id:5, title:'test 45'}, {id:54, title:'Random 6337'}];
    }
}

module.exports = Article;
const dbPool = require("../config/database");

const getAllArticle = () => {
	const SQLQuery = "SELECT * FROM article";
	return dbPool.execute(SQLQuery);
};

const getDetailArticle = (id) => {
	const SQLQuery = `SELECT article.id, article.title, article.poster_url, article.content, categories.category_name, article.createdAt, article.updatedAt 
	FROM article 
	INNER JOIN categories 
	ON article.category_id = categories.id 
	WHERE article.id = ${id};`;
	return dbPool.execute(SQLQuery);
};


const getPaginArticle = (queryParams) => {
  const page = queryParams.page;
  const limitPerPage = queryParams.limit;

	const SQLQuery = `SELECT* FROM article LIMIT ${limitPerPage} OFFSET ${( page - 1) * limitPerPage};`;
	return dbPool.execute(SQLQuery);
};
//get count data article
const getCountArticle = () => {
	const SQLQuery = `SELECT COUNT(*) as countData FROM article;`;
	return dbPool.execute(SQLQuery);
};

const createNewArticle = (body) => {
	const SQLQuery = `INSERT INTO article (category_id, title, content, poster, poster_url, createdAt, updatedAt) VALUES(${body.category_id}, '${body.title}', '${body.content}', '${body.poster}', '${body.poster_url}', now(), now())`;
	return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllArticle,
  getPaginArticle,
  createNewArticle,
  getCountArticle,
	getDetailArticle
}
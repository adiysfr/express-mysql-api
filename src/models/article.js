const dbPool = require("../config/database");

const getAllArticle = () => {
	const SQLQuery = "SELECT * FROM article";
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
	const SQLQuery = `INSERT INTO article (title, poster, url, createdAt, updatedAt) VALUES('${body.title}', '${body.poster}', '${body.url}', now(), now())`;
	return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllArticle,
  getPaginArticle,
  createNewArticle,
  getCountArticle
}
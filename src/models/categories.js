const dbPool = require("../config/database");

const getCategoriesModel = () => {
	const SQLQuery = "SELECT * FROM categories";
	return dbPool.execute(SQLQuery);
};

// const getPaginArticle = (queryParams) => {
//   const page = queryParams.page;
//   const limitPerPage = queryParams.limit;

// 	const SQLQuery = `SELECT* FROM article LIMIT ${limitPerPage} OFFSET ${( page - 1) * limitPerPage};`;
// 	return dbPool.execute(SQLQuery);
// };
// //get count data article
// const getCountArticle = () => {
// 	const SQLQuery = `SELECT COUNT(*) as countData FROM article;`;
// 	return dbPool.execute(SQLQuery);
// };

const createCategoryModel = (body) => {
	const SQLQuery = `INSERT INTO categories (category_name, created_at, updated_at) VALUES('${body.category_name}', now(), now())`;
	return dbPool.execute(SQLQuery);
};

const updateCategoryModel = (body, id) => {
	const SQLQuery = `UPDATE categories SET category_name='${body.category_name}', updated_at=now() WHERE id=${id}`;
	return dbPool.execute(SQLQuery);
};

const deleteCategoryModel = (id) => {
	const SQLQuery = `DELETE FROM categories WHERE id=${id}`;
	return dbPool.execute(SQLQuery);
};

// check exixting data category
const checkAlreadyCategory = (category_name) => {
	const SQLQuery = `SELECT COUNT(*) length FROM categories WHERE category_name = '${category_name}'`;
	return dbPool.execute(SQLQuery);
};

module.exports = {
  getCategoriesModel,
  createCategoryModel,
  checkAlreadyCategory,
	updateCategoryModel,
	deleteCategoryModel
}
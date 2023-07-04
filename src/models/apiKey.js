const dbPool = require("../config/database");

//get api key
const getApiKey = () => {
	const SQLQuery = `SELECT * FROM api_key WHERE id = 1`;
	return dbPool.execute(SQLQuery);
};

module.exports = {
  getApiKey
}
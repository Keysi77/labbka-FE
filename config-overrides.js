/*eslint-disable*/
// NOTE: it because of hot reloading code getting from https://daveceddia.com/hot-reloading-create-react-app/
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

const { override } = require('customize-cra');

module.exports = override(
	rewireReactHotLoader
);

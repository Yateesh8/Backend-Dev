// URL Methods

// Old :
const url = require("url");
const oldUrl = url.parse(req.url, true);
console.log(oldUrl.query);    // deprication warning

// New :
const newUrl = new URL(req.url, `http://${req.headers.host}`);    // no deprication warning
console.log(newUrl.searchParams.get("name"));


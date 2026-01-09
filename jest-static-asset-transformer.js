const path = require("path");

// Export static assets as their relative name (string).
// https://jestjs.io/docs/en/webpack#handling-static-assets
module.exports = {
  process(_, filename) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(filename))};`,
    };
  },
};

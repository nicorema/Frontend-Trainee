const { fetchData } = require('./http');
const printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
    return title;
  });
};


const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

exports.printTitle = printTitle;
exports.loadTitle = loadTitle;

var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/*GET trvel view*/
const travel = (req, res) => {
    res,render('travel', { title: 'Travlr Gateways'}, trips);
};

module.exports = {
    travel
};

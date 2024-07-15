/* GET HOMEPAGE */
const index = (req, res) => {
    res.render('index', { tiltle: "Travelr Gateways"});
};

module.exports = {
    index
}
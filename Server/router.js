
var page = require('./page.js');

function router(req, res) {
    switch (req.url) {
        case '/':
            page.accueil(req, res);
            break;
        case '/toto':
            page.toto(req, res);
            break;
        default:
            page.erreur404(req, res);
    }
}
module.exports = router;

class HomeController {
    index(req, res) {
        res.send(`<h1>API ESCOLA</h1>`);
    }
};

export default new HomeController();
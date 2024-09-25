const jmski = {
    ja: (req, res) => {
        res.render('index');
    },
    mir: (req, res) => {
        res.render('shop');
    },
    lan: (req, res) => {
        res.render('about');
    },
    der: (req, res) => {
        res.render('services');
    },
    ski: (req, res) => {
        res.render('blog');
    }
};

module.exports = jmski;
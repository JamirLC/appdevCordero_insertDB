const jmski = {
    index: (req, res) => {
        res.render('index');
    },

    save: (req, res) => {
        const data = req.body;
        console.log(data);
    }
};

module.exports = jmski;
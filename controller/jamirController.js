const information = require('../models/UserInfo');
const info = require('../models/UserInfo');
const jmski = {
    index: (req, res) => {
        res.render('index');
    },

    information: (req, res) => {
         info.getAll((err, results) => { 
             if (err) throw err;
             res.render('list', { information: results });
         });
    },

    save: (req, res) => {
        const data = req.body;
        info.save(data, (err) => { 
            if (err) throw err;
            res.redirect('/');
        });
    }
};

module.exports = jmski;
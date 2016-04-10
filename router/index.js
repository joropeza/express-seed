
module.exports = function (app) {
    app.use('/api/unicorns', require('./routes/unicorns'));
};

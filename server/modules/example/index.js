module.exports = {
  configure(app) {
    console.log("EXAMPLE ACTIVE")
    app.use('/api/example', require("./routes/accountant.routes"));
  }
};
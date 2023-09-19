module.exports = {
    configure(app) {
        app.use("/api/system/colors", require("./colors.routes"))
    }
}
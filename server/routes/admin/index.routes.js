module.exports = { 
    configure(app) {
        app.use("/api/todo", require("./todo.routes"))
    }
}
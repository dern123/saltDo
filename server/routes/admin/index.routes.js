module.exports = { 
    configure(app) {
        app.use("/api/todo", require("./todo.routes"));
        app.use("/api/todo/categories", require("./categories_todo.routes"));
        app.use("/api/todo/statuses", require("./statuses_todo.routes"));
        app.use("/api/todo/teams", require("./teams_todo.routes"));
    }
}
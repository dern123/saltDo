const handler = require("../../utils/responseHendler");
const StatusTodoModel = require("../../models/Status_todo");

module.exports = {
    create: async(req, res) => {
        try{
            const {title, active, 
                userId, teamId, color} = req.body;
            const own = {};
            if(teamId){
                own = {teamId}
            }
            if(!teamId){
                own = {userSingleId: userId}
            }
            const todo = StatusTodoModel({
                title,
                userId,
                userCreateId: userId,
                active,
                color,
                ...own
            })

            await todo.save();

            return handler.positiveResponse(res, {message: "SuccessSaveNewTodoCard"}, req)
        }catch(err){
            console.log(err);
            return handler.negativeResponse(res, { message: "Error!" });
        }
    },

    edit: async(req, res) => {
        try{
            const {title, active, 
                userId, teamId, color, id} = req.body;
            const own = {};
            if(teamId){
                own = {teamId}
            }
            if(!teamId){
                own = {userSingleId: userId}
            }
            await StatusTodoModel.findOneAndUpdate({_id: id}, {
                title,
                userId,
                userCreateId: userId,
                active,
                color,
               ...own
            })

           return handler.positiveResponse(res, {message: "SuccessSaveNewTodoCard"}, req);
        }catch(err){
            console.log(err);
            return handler.negativeResponse(res, { message: "Error!" });
        }
    },

    get: async(req, res) => {
        try{
            const todos = await StatusTodoModel.find();
            return handler.positiveResponse(res,todos);
        }catch(err){
            console.log(err);
        }
    },

    getById: async(req, res) => {
        try{
            const { id } = req.body;
            const todo = await StatusTodoModel.findById({ _id:id });

            return handler.positiveResponse(res, todo)
        }catch(err){
            console.log(err);
            return handler.negativeResponse(res, { message: "Error!" });
        }
    },
}
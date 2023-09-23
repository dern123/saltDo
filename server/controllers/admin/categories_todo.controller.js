const handler = require("../../utils/responseHendler");
const CategoriesTodoModel = require("../../models/Status_todo");

exports.create = async(req, res) => {
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
        const todo = CategoriesTodoModel({
            title,
            userId,
            userCreateId: userId,
            active,
            teamId,
            color
        })

        await todo.save();

        return handler.positiveResponse(res, {message: "SuccessSaveNewTodoCard"}, req)
    }catch(err){
        console.log(err);
        return handler.negativeResponse(res, { message: "Error!" });
    }
};

exports.edit = async(req, res) => {
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
        await CategoriesTodoModel.findOneAndUpdate({_id: id}, {
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
};

exports.get = async(req, res) => {
    try{
        const todos = await CategoriesTodoModel.find();
        return handler.positiveResponse(res,todos);
    }catch(err){
        console.log(err);
    }
};

exports.getById = async(req, res) => {
    try{
        const { id } = req.body;
        const todo = await TodoModel.findById({ _id:id });

        return handler.positiveResponse(res, todo)
    }catch(err){
        console.log(err);
        return handler.negativeResponse(res, { message: "Error!" });
    }
};
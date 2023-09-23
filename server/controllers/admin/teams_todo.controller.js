const handler = require("../../utils/responseHendler");
const TodoModel = require("../../models/Todo");

exports.create = async(req, res) => {
    try{
        const {title, discription, status, userId, 
            categories, assigns, teamId} = req.body;
        const own = {};
        if(teamId){
            own = {teamId}
        }
        if(!teamId){
            own = {userSingleId: userId}
        }
        const todo = TodoModel({
            title,
            discription,
            status,
            userId,
            userCreatedId: userId,
            categories,
            assigns,
            ...own
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
        const {title, discription, status, userId, 
            categories, assigns, teamId, id} = req.body;
        const own = {};
        if(teamId){
            own = {teamId}
        }
        if(!teamId){
            own = {userSingleId: userId}
        }

        await TodoModel.findOneAndUpdate({_id: id}, {
            title,
            discription,
            status,
            userId,
            userCreatedId: userId,
            categories,
            assigns,
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
            const todos = await TodoModel.find();
            return handler.positiveResponse(res,todos);
    }catch(err){
        console.log(err);
    }
},

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
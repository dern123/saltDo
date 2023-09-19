const express = require("express");
const session = require('express-session');
const config = require("config");
const mongoose = require("mongoose");
const compression = require('compression');

const fs = require("fs");
const cors = require('cors');
// const { logger } = require("./server/helpers/logger.helper");
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const MongoStore = require("connect-mongo");
const passport = require("passport");

const corsConfig = require("./server/middlewares/cors");

const moduleFile = fs.readFileSync("./server/modules/index.json");
const MODULES = JSON.parse(moduleFile);

const PORT =  process.env.PORT || config.get('PORT'); 
const mongoUrl = config.get('mongoUri');

const app = express();
const server = require("http").Server(app);

app.use(bodyParser.json({limit: "100mb"}))
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:100000}))

app.use(express.json());
app.use(compression())
app.use(corsConfig)
app.use(cors())
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extendet: true }));

app.use(session(({
  secret: config.get("JWR_TOKEN"),
  key: "SID",
  cookie: {
    path:"/",
    httpOnly:true,
    maxAge: null
  },
  store: MongoStore.create({
    mongoUrl,
  }),
  autoRemove : 'interval' ,
  autoRemoveInterval : 120 // Минуты
})))

// const sch = {
//   name:String,
//   email:String,
//   id:Number
// }
// const monmodel = mongoose.model("NEWCOL", sch);

// const counterSchema = {
//   id:{
//     type: String
//   },
//   seq:{
//     type: Number
//   }
// }

// const counterModel = mongoose.model("counter", counterSchema);

// app.post("/post", async (req, res) => {
//   try {
//     const cd = await counterModel.findOneAndUpdate(
//       { id: "autoval" },
//       { $inc: { "seq": 1 } },
//       { new: true }
//     );

//     console.log("counter value", cd);

//     let seqId;

//     if (cd == null) {
//       const newval = new counterModel({ id: "autoval", seq: 1 });
//       await newval.save();
//       seqId = 1;
//     } else {
//       seqId = cd.seq;
//     }

//     const data = new monmodel({
//       name: req.body.name,
//       email: req.body.email,
//       id: seqId
//     });

//     await data.save();
//     res.send("posted");
//   } catch (err) {
//     console.error("Помилка при обробці запиту:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.use(passport.initialize());
require("./server/middlewares/passport")(passport);

// SYSTEM API
require("./server/routes/system/index.routes").configure(app);
//AUTH
require("./server/routes/auth/index.routes").configure(app);

function start() {
    try{
      mongoose.connect(mongoUrl, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
      });

      mongoose.connection.on('connected', () => {
        // logger.info('Mongo connected', {tags: ['mongo']});
        // capaJob.restartAllHoldCrons()
        // partnerJob.startCheckWork()
        // partnerJob.startResetPartner()
        // leadOld.start()
        // postbackStartAfterServerRestart()
        // telegramBotService.startBot()
        // telegramJob.startCheckFtd()
        // exchangeJob.checkExchange()
        // exchange.get()
        // capaHelper.restartManualSending()
        // statusesHelper.getStatuses().then((data) => {
        //     global.trash = data.trash
        //     global.double = data.double
        //     global.notSended = data.notSended
        //     global.valid = data.valid
        //     global.oldValid = data.oldValid
        //     global.hold = data.hold
        //     global.deleted = data.deleted
        //     global.pended = data.pended
        //     global.sended = data.sended

        // })
      });
      mongoose.connection.on('reconnected', () => {
        // logger.info('Mongo reconnected', {tags: ['mongo']});
      });
      mongoose.connection.on('disconnected', () => {
        // logger.info('Mongo disconnected', {tags: ['mongo']});
      });
      mongoose.connection.on('close', () => {
        // logger.info('Mongo closed', {tags: ['mongo']});
      });
      mongoose.connection.on('error', (error) => {
        // logger.error(error, {tags: ['mongo']});
      });
        server.listen(PORT, () => {
            // logger.info(`Server started on port: ${PORT}`)
            console.info(`Server started on port: ${PORT}`)
        });
    } catch (e) {
        // logger.error("SERVER EXIT", e)
        console.error("SERVER EXIT", e)
        process.exit(1);
    }
}
start();

module.exports = app;



// const express = require("express");
// const session = require('express-session');
// const config = require("config");
// const fs = require("fs");
// const compression = require('compression');
// const cors = require('cors'); // Додайте цей рядок
// const path = require('path');
// const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');

// const corsConfig = require("./server/middlewares/cors");

// const moduleFile = fs.readFileSync("./server/modules/index.json");
// const MODULES = JSON.parse(moduleFile);

// const app = express();
// const server = require("http").Server(app);

// app.use(compression());
// app.use(cors()); // Включіть cors
// app.use(corsConfig);
// app.use(cookieParser());

// const PORT =  process.env.PORT || config.get('PORT');

// require("./server/routes/system/index.routes").configure(app);

// MODULES.forEach(m => {
//   if(m.active){
//     const appModule = require(m.path)
//     if (typeof appModule.configure === 'function') {
//       appModule.configure(app);
//     }
//   }
// });

// if(process.env.NODE_ENV === 'production'){

//   app.use('/', express.static(path.join(__dirname,'public')))

//   app.get('*', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'public/index.html'));
//   } )
//   require("./server/middlewares/socket.middleware").connect(server, true)
// }
// else{
//   require("./server/middlewares/socket.middleware").connect(server, false)
// }

// server.listen(PORT, () => {
//   console.info(`Server started on port: ${PORT}`);
// });

// module.exports = app;
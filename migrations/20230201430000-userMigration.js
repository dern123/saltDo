module.exports = {
  async up(db, client) {
      const roleClient = await db.collection("user_roles").find({'name': 'Client'}).toArray()
      const users = await db.collection("users").find().sort({id: -1}).limit(1).toArray()
      let nextUserId = 1
      if(users.length > 0){
        nextUserId = parseInt(users[0]['id']) + 1
      }

      await db.collection("users").insertMany([{
          fullName: 'Salt Do',
          email:    'saltDo@gmail.com',
          login:    'saltDo',
          password: 'd',
          userStatus: {
              name: 'SUCCESS',
              description: 'Первая регистрация',
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          active: false,
          userRoleId: roleClient[0]._id,
          limitLeads: 0,
          gender: 'men',
          telegram: '@saltDo',
          optionsDashboard: {
              webCapa: true,
              statisticLeads: true,
              finance: true,
              integration: true,
              offers: true,
              connections: true,
              streams: true,
              capa: true,
              roles: true,
              managers: true
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          id: nextUserId,
      }])

      await db.collection("identitycounters").updateOne({model: 'Users'}, {$set: {count: nextUserId}})
  },

  async down(db, client) {

  }
};

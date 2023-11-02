module.exports = {
  async up(db, client) {
    await db.createCollection("user_roles")
    await db.collection("user_roles").insertMany(
      [
        { name: "Client", color: "", title: "", createdAt: new Date(), updatedAt: new Date(),
        default: true,
        permissions:   {
          admin:{
              access: false,
              modules:{
                  users:{
                      access: false,
                      action: {
                          create:  false,
                          update:  false,
                          read:  false
                      }
                  },
                  roles:{
                      access: false,
                      action: {
                          create: false,
                          update: false,
                          read: false
                      }
                  },
              }
          },
          client:{
              access: true,
              modules:{
                dashboard:{
                  access: true,
                  action: {
                    create: false,
                    update: false,
                    read: false
                }
              },
              todo:{
                access: true,
                action: {
                  create: false,
                  update: false,
                  read: false
                }
              }
            }
          }
        }
        },
        { name: "Admin", color: "", title: "", createdAt: new Date(), updatedAt: new Date(),
        default: true,
        permissions:   {
          admin:{
              access: true,
              modules:{
                  users:{
                      access: true,
                      action: {
                          create:  true,
                          update:  true,
                          read:  true
                      }
                  },
                  roles:{
                      access: true,
                      action: {
                          create: true,
                          update: true,
                          read: true
                      }
                  },
              }
          },
          client:{
              access: true,
                access: true,
                modules:{
                  dashboard:{
                    access: true,
                    action: {
                      create: false,
                      update: false,
                      read: false
                  }
                },
                todo:{
                  access: true,
                  action: {
                    create: false,
                    update: false,
                    read: false
                  }
                }
              }
          }
        }
        }
      ]
   )
  },

  async down(db, client) {
  }
};

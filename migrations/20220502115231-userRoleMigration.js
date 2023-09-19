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
                //   offers:{
                //       access: false,
                //       action: {
                //           create:  false,
                //           update: false,
                //           read: false
                //       }
                //   },
                //   streams:{
                //       access:  false,
                //       action: {
                //           create: false,
                //           update: false,
                //           read:   false
                //       }
                //   },
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
              client: {
                  access: true,
                  modules:{
                    //   offers:{
                    //       access: true,
                    //       action: {
                    //           create:  true,
                    //           update: true,
                    //           read: true
                    //       }
                    //   },
                    //   streams:{
                    //       access: false,
                    //       action: {
                    //           create: true,
                    //           update: true,
                    //           read: true
                    //       }
                    //   },
                  }
              },
          }
        }
        },
        { name: "Admin", color: "", title: "", createdAt: new Date(), updatedAt: new Date(),
        default: true,
        permissions:   {
          admin:{
              access: true,
              modules:{
                //   offers:{
                //       access: true,
                //       action: {
                //           create:  true,
                //           update: true,
                //           read: true
                //       }
                //   },
                //   streams:{
                //       access:  true,
                //       action: {
                //           create: true,
                //           update: true,
                //           read:   true
                //       }
                //   },
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
              client: {
                  access: true,
                  modules:{
                    //   offers:{
                    //       access: true,
                    //       action: {
                    //           create:  true,
                    //           update: true,
                    //           read: true
                    //       }
                    //   },
                    //   streams:{
                    //       access: true,
                    //       action: {
                    //           create: true,
                    //           update: true,
                    //           read:true
                    //       }
                    //   },
                  }
              },
          }
        }
        }
      ]
   )
  },

  async down(db, client) {
  }
};

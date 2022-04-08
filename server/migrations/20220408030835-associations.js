// "use strict";

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     queryInterface.addConstraint("friends", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "friend_user_reference_1",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     queryInterface.addConstraint("friends", {
//       fields: ["fUser_id"],
//       type: "foreign key",
//       name: "friend_user_reference_2",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     queryInterface.addConstraint("posts", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "post_user_reference_1",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     queryInterface.removeConstraint("friends", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "friend_user_reference_1",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     queryInterface.removeConstraint("friends", {
//       fields: ["fUser_id"],
//       type: "foreign key",
//       name: "friend_user_reference_2",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     queryInterface.removeConstraint("posts", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "post_user_reference_1",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });
//   },
// };

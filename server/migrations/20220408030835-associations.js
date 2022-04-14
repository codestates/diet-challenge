// "use strict";

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.addConstraint("friends", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "user_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     await queryInterface.addConstraint("friends", {
//       fields: ["fUser_id"],
//       type: "foreign key",
//       name: "fUser_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     await queryInterface.addConstraint("users", {
//       fields: ["latestPostId"],
//       type: "foreign key",
//       name: "latestPostId",
//       references: {
//         table: "posts",
//         field: "id",
//       },
//     });

//     await queryInterface.addConstraint("posts", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "user_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.removeConstraint("friends", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "user_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     await queryInterface.removeConstraint("friends", {
//       fields: ["fUser_id"],
//       type: "foreign key",
//       name: "fUser_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });

//     await queryInterface.removeConstraint("users", {
//       fields: ["latestPostId"],
//       type: "foreign key",
//       name: "latestPostId",
//       references: {
//         table: "posts",
//         field: "id",
//       },
//     });

//     await queryInterface.removeConstraint("posts", {
//       fields: ["user_id"],
//       type: "foreign key",
//       name: "user_id",
//       references: {
//         table: "users",
//         field: "id",
//       },
//     });
//   },
// };

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type User {
    id: ID
    username: String
    age: Int
    posts: [Post]
  }
  type Post{
   id: ID
   title: String
   content: String
  }
  input UserInput {
   id: ID
   username: String!
   age: Int!
   posts: [PostInput]
 }
 input PostInput{
  id: ID
  title: String!
  content: String!
 }
 type Query{
   getAllUsers: [User]
   getUser(id:ID): User
 }
 type Mutation{
   createUser(input: UserInput):User   
 }
`);

// var rootValue = { hello: () => 'Hello world!' };

// var source = '{ hello }';

// graphql({ schema, source, rootValue }).then((response) => {
//    console.log(response);
// }); 

module.exports = schema
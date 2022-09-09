const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()
app.use(cors())

const users = [{
   id: 1, username: 'Oleg', age: 21, posts: [
      { id: 123, title: 'FirstPost', content: 'blabla' }
   ]
},
{ id: 2, username: 'Lesha', age: 22, }]

const root = {
   getAllUsers: () => {
      return users
   },
   getUser: ({ id }) => {
      return users.find(user => user.id == id)
   },
   createUser: ({ input }) => {
      const id = Date.now()
      const user = { id, ...input }
      users.push(user)
      return user
   },
}

app.use("/graphql", graphqlHTTP({
   graphiql: true,
   schema,
   rootValue: root
}))

const port = 5000

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
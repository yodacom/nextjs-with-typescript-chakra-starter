
const { ApolloServer, gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => {
      return "hello!";
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

// need this or you will get an error cause the way nextjs handles response does not want to use this bodyParser...it has its own method.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

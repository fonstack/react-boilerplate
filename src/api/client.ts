import { GraphQLClient } from 'graphql-request';

const apiURL = process.env.REACT_APP_API_URL ?? '';
const graphQlClient: GraphQLClient = new GraphQLClient(apiURL);

export default graphQlClient;

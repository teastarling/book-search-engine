const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Integer
        savedBooks: [Book]!
    }
    
    type Book {
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
    }
    
    type Mutation {

    }
    `;

    module.exports = typeDefs;
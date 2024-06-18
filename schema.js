// Define the GraphQL schema using schema definition language (SDL)
export const typeDefs = `#graphql
    # Define the Game type with its fields
    type Game {
        id: ID!
        title: String!
        platform: [String!]!        # Platform is a list of non-nullable strings
        reviews: [Review!]          # Reviews is a list of non-nullable Review objects
    }

    # Define the Review type with its fields
    type Review {
        id: ID!
        rating: Int!                # Rating is a non-nullable integer
        content: String!            # Content is a non-nullable string
        game: Game!                 # Game is a non-nullable Game object
        author: Author!             # Author is a non-nullable Author object
    }

    # Define the Author type with its fields
    type Author {
        id: ID!
        name: String!               # Name is a non-nullable string
        verified: Boolean!          # Verified is a non-nullable boolean
        reviews: [Review!]          # Reviews is a list of non-nullable Review objects
    }

    # Define the root Query type
    type Query {
        games: [Game]               # Fetches a list of Game objects
        game(id: ID): Game          # Fetches a single Game by ID
        reviews: [Review]           # Fetches a list of Review objects
        review(id: ID): Review      # Fetches a single Review by ID
        authors: [Author]           # Fetches a list of Author objects
        author(id: ID): Author      # Fetches a single Author by ID
    }

    # Define the root Mutation type
    type Mutation {
        deleteGame(id: ID!): [Game]                             # Deletes a game by ID and returns the updated list of games
        addGame(game: AddGameInput): Game                       # Adds a new game and returns the added game
        updateGame(id: ID!, edits: UpdateGameInput!): Game      # Updates an existing game by ID and returns the updated game
    }

    # Define the input type for adding a new game
    input AddGameInput {
        title: String!              # Title is a non-nullable string
        platform: [String!]!        # Platform is a list of non-nullable strings
    }

    # Define the input type for updating an existing game
    input UpdateGameInput {
        title: String               # Title is a nullable string
        platform: [String!]         # Platform is a list of non-nullable strings
    }
`

// Scalar types in GraphQL: Int, Float, String, Boolean, ID

// The Query type is a special type in GraphQL that defines the entry point for the API. It is a mandatory type in any GraphQL schema.

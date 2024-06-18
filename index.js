import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db.js";

import { typeDefs } from "./schema.js";

// Define the resolver functions
const resolvers = {
  Query: {
    // Fetch all games
    games() {
      return db.games;
    },
    // Fetch a single game by ID
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    // Fetch all reviews
    reviews() {
      return db.reviews;
    },
    // Resolver for fetching a single review by ID
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    // Fetch all authors
    authors() {
      return db.authors;
    },
    // Fetch a single author by ID
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    // Fetch reviews associated with a specific game
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    // Fetch reviews written by a specific author
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    // Fetch the author of a specific review
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    // Fetch the game of a specific review
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    // Delete a game by ID
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    // Add a new game
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);
      return game;
    },
    // Update an existing game by ID
    updateGame(_, args) {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return {
            ...game,
            ...args.edits,
          };
        }
        return game;
      });
      return db.games.find((game) => game.id === args.id);
    },
  },
};

// Setup and start the Apollo Server
const server = new ApolloServer({
  // Define the schema type definitions
  typeDefs,
  // Define the resolver functions
  resolvers,
});

// Start the server and listen on port 4000
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

// Log the server URL to the console
console.log(`🚀 Server ready at ${url}`);

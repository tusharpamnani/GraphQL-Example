# GraphQL Exploration

This project is a simple GraphQL server implementation using Apollo Server. The server provides a basic setup to explore the capabilities of GraphQL, including querying and mutating game, review, and author data.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tusharpamnani/GraphQL-Example.git
    cd GraphQL-Example
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Server

Start the server:
```bash
npm start
```

The server will be running at `http://localhost:4000`.

## Project Structure

- `index.js`: The main server setup and configuration.
- `schema.js`: GraphQL schema definitions.
- `db.js`: Simulated in-memory database.

## Exploring GraphQL

To explore the available queries and mutations, you can use the Apollo Sandbox, accessible at `http://localhost:4000`.

## Differences Between REST API and GraphQL

### REST API

- **Fixed Endpoints**: REST APIs have fixed endpoints for each resource.
- **Over-fetching/Under-fetching**: Often, clients receive too much or too little data.
- **Multiple Requests**: Fetching related resources often requires multiple requests.

### GraphQL

- **Single Endpoint**: GraphQL uses a single endpoint for all queries and mutations.
- **Precise Fetching**: Clients can request exactly the data they need.
- **Nested Queries**: Allows fetching related resources in a single query.

### Why Choose GraphQL Over REST?

- **Efficiency**: Reduces the number of network requests and the amount of data transferred.
- **Flexibility**: Clients have control over the structure and size of the response.
- **Strongly Typed**: Schema is strongly typed, ensuring consistency and providing clear API documentation.
- **Rapid Iteration**: Easier to evolve APIs without breaking existing clients.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT](LICENSE) License.

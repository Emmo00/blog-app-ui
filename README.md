# blog-app-ui

Blog Application UI in vue

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (version 12.x or higher recommended)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

First, clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/emmo00/blog-app-ui.git
```

### 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd blog-app-ui
```

### Configure Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

### 3. Install Dependencies

Install the necessary dependencies using npm or Yarn:

Using npm:

```bash
npm install
```

### 4. Run the Development Server

Start the development server to run the application locally:

Using npm:

```bash
npm run dev
```

The application should now be running at [http://localhost:5173](http://localhost:5173).

## Project Structure

Here is an overview of the project structure:

```py
blog-app-ui
├── node_modules        # Project dependencies
├── public              # Public assets
├── src                 # Source files
│   ├── assets          # Static assets
|   ├── utils           # Utility files/functions
|   ├── router          # Vue router config file
│   ├── components      # Vue components
│   ├── views           # Vue views/pages
│   ├── App.vue         # Root component
│   └── main.js         # Main JavaScript file
├── .gitignore          # Files to ignore in git
├── package.json        # Project configuration and dependencies
├── README.md           # Project setup and documentation
└── vue.config.js       # Vue CLI configuration (optional)
```

## Contributing

Contributions are welcome, just clone and make a PR.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

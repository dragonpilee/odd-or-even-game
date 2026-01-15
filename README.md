# Odd or Even Game (Hand Cricket)

A modern, Dockerized web application version of the classic "Odd or Even" hand cricket game, built with React and Vite.

## Features

- **Interactive Gameplay**: Play against the computer with intuitive hand gesture controls.
- **Modern UI**: Clean, responsive interface with custom vector assets.
- **Dockerized**: Fully containerized for easy setup and consistency across environments.
- **Development Mode**: Optimized for rapid development with hot-reloading enabled in Docker.

## Technology Stack

- **Frontend**: React, Vite
- **Styling**: Custom CSS (ported from legacy design)
- **Containerization**: Docker, Docker Compose
- **Base Image**: Node.js 18 (LTS)

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dragonpilee/odd-or-even-game.git
   cd odd-or-even-game
   ```

2. **Start the application:**
   ```bash
   docker-compose up --build
   ```

3. **Play the game:**
   Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

## Project Structure

- `src/App.jsx`: Main game logic and UI components.
- `src/App.css`: Global styles and game visual design.
- `public/`: Static assets (images, icons).
- `Dockerfile`: Docker configuration for the application.
- `docker-compose.yml`: Service definition and port mapping.

## Development

The Docker container runs in development mode (`npm run dev`). Any changes made to the `src` directory will automatically reload the application in the browser.

## Assets

All game assets, including hand gestures and background, are located in the `public` directory.

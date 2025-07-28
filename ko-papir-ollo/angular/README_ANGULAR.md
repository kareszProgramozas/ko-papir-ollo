# Rock–Paper–Scissors Game (Kő–Papír–Olló) – Python GUI Version

This is a simple GUI version of the classic "Rock–Paper–Scissors" game (Hungarian: "Kő–Papír–Olló") built with angular. The game allows you to play against the computer, track the game results (wins, losses, draws), and restart the game anytime.

## 🧩 Features

- Intuitive graphical user interface using angular
- Score tracking: wins, losses, draws
- "New Game" button to reset the game
- Hungarian UI text (with English translations below)

## 🎮 How to Play

1. Choose one of the buttons: 🪨 Rock, 📄 Paper, ✂️ Scissors
2. The computer will randomly select its choice.
3. The result is displayed: Win, Lose, or Draw.
4. Scores are updated automatically.
5. Click **"Új játék" (New Game)** to reset everything.

## 💬 Hungarian Labels & English Translations

| Hungarian         | English Equivalent     |
|-------------------|------------------------|
| Kő                | Rock                   |
| Papír             | Paper                  |
| Olló              | Scissors               |
| Nyertél!          | You won!               |
| Vesztettél!       | You lost!              |
| Döntetlen!        | It's a draw!           |
| Új játék          | New Game               |


## Installation

# Running an Angular Project in Visual Studio Code

This guide helps you set up and run an existing Angular project using Visual Studio Code.

## 1. Prerequisites

Before running the project, make sure the following are installed:

### 1.1 Node.js and npm
Download and install Node.js (which includes npm) from [https://nodejs.org](https://nodejs.org).

To check if they are installed:
```bash
node -v
npm -v
```

### 1.2 Angular CLI (Command Line Interface)
Install Angular CLI globally using npm:
```bash
npm install -g @angular/cli
```

To verify installation:
```bash
ng version
```

### 1.3 Visual Studio Code
Download and install VS Code from [https://code.visualstudio.com](https://code.visualstudio.com).

Install the Angular Essentials extension pack (recommended).

## 2. Running the Project

### 2.1 Open the Project in VS Code
- Launch Visual Studio Code.
- Open the folder of your Angular project: `cd ko-papir-ollo/angular`

### 2.2 Install Dependencies
Open a terminal in VS Code and run:
```bash
npm install
```

This installs all dependencies listed in `package.json`.

### 2.3 Start the Development Server
Run:
```bash
ng serve
```

This starts the development server. Open your browser and go to:
```
http://localhost:4200
```

## 3. Additional Tips

- To stop the server, press `Ctrl + C` in the terminal.
- To build for production:
```bash
ng build --prod
```

---

> Now you're ready to develop and test your Angular application!

## License

– free to use and modify.

---

## Author

Created with by Horváth Károly


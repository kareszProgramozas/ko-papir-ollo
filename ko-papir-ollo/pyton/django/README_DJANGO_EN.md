# Rock–Paper–Scissors – Django Version

This is a simple Rock–Paper–Scissors web application built using Django. The player competes against the computer in a classic game. Each round is evaluated, and a victory/loss/draw counter tracks performance. A "New Game" button resets the statistics.

---

## Features

- Play Rock–Paper–Scissors against the computer.
- Real-time victory/loss/draw statistics.
- "New Game" button to reset the game.
- Lightweight frontend built with HTML & JavaScript.
- No database is required – the game is session-based.

---

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

---

## Requirements

- Python 3.8+ (tested up to 3.13)
- Django 5.2+

---

## Installation

1. Clone the repository or download the project files.

2. Make sure Python is installed. You can verify with:
   ```bash
   python --version
   ```

3. Install Django:
   ```bash
   pip install django
   ```

---

## Running the Project

1. Navigate to the project directory where `manage.py` is located.

2. Start the development server:
   ```bash
   python manage.py runserver
   ```

3. Open your browser and go to:
   ```
   http://127.0.0.1:8000/
   ```

You should see the Rock–Paper–Scissors game interface.

---

## Folder Structure

```
ko_papir_ollo/
├── game/
│   ├── templates/
│   │   └── index.html
│   ├── views.py
│   ├── urls.py
│   └── ...
├── ko_papir_ollo/
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── manage.py
└── README.md
```

---

## Notes

- This version does not use a database; all game data is stored in Django sessions.
- For production deployment, use `collectstatic`, a WSGI server, and configure `ALLOWED_HOSTS`, `STATIC_ROOT`, etc.

---

## License

– free to use and modify.

---

## Author

Created with by Horváth Károly
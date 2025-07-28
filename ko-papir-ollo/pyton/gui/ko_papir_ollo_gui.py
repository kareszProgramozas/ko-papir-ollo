import tkinter as tk
import random

# Alkalmazás ablak létrehozása
root = tk.Tk()
root.title("Kő – Papír – Olló")

# Játék statisztika
wins = 0
losses = 0
draws = 0

# Változók a visszajelzéshez
result_var = tk.StringVar()
score_var = tk.StringVar()

def play(user_choice):
    global wins, losses, draws
    options = ["Kő", "Papír", "Olló"]
    computer_choice = random.choice(options)

    if user_choice == computer_choice:
        result = f"Döntetlen! Gép is {computer_choice}-t választott."
        draws += 1
    elif (user_choice == "Kő" and computer_choice == "Olló") or \
         (user_choice == "Papír" and computer_choice == "Kő") or \
         (user_choice == "Olló" and computer_choice == "Papír"):
        result = f"Nyertél! Gép {computer_choice}-t választott."
        wins += 1
    else:
        result = f"Vesztettél! Gép {computer_choice}-t választott."
        losses += 1

    result_var.set(result)
    update_score()

def update_score():
    score_text = f"Állás: {wins} nyert – {losses} veszteség – {draws} döntetlen"
    score_var.set(score_text)

def reset_game():
    global wins, losses, draws
    wins = losses = draws = 0
    result_var.set("Új játék indult.")
    update_score()

# GUI elemek
title_label = tk.Label(root, text="Válassz: Kő, Papír vagy Olló", font=("Arial", 14))
title_label.pack(pady=10)

button_frame = tk.Frame(root)
button_frame.pack()

tk.Button(button_frame, text="🪨 Kő", width=10, command=lambda: play("Kő")).grid(row=0, column=0, padx=5)
tk.Button(button_frame, text="📄 Papír", width=10, command=lambda: play("Papír")).grid(row=0, column=1, padx=5)
tk.Button(button_frame, text="✂️ Olló", width=10, command=lambda: play("Olló")).grid(row=0, column=2, padx=5)

result_label = tk.Label(root, textvariable=result_var, font=("Arial", 12), fg="blue")
result_label.pack(pady=10)

score_label = tk.Label(root, textvariable=score_var, font=("Arial", 12))
score_label.pack()

reset_button = tk.Button(root, text="🔄 Új játék", command=reset_game)
reset_button.pack(pady=10)

# Alapértelmezett szöveg
reset_game()

# Alkalmazás indítása
root.mainloop()
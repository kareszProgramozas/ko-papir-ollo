import random
from django.shortcuts import render

# Állapot tárolása memóriában
stats = {"win": 0, "lose": 0, "draw": 0}

def index(request):
    choices = ['kő', 'papír', 'olló']
    player_choice = None
    computer_choice = None
    result = None

    if request.method == 'POST':
        if 'reset' in request.POST:
            # Új játék gomb lenyomása
            stats["win"] = stats["lose"] = stats["draw"] = 0
        else:
            # Játék logika
            player_choice = request.POST.get('choice')
            computer_choice = random.choice(choices)

            if player_choice == computer_choice:
                result = 'Döntetlen'
                stats["draw"] += 1
            elif (player_choice == 'kő' and computer_choice == 'olló') or \
                 (player_choice == 'papír' and computer_choice == 'kő') or \
                 (player_choice == 'olló' and computer_choice == 'papír'):
                result = 'Győztél!'
                stats["win"] += 1
            else:
                result = 'Vesztettél!'
                stats["lose"] += 1

    return render(request, 'index.html', {
        'player_choice': player_choice,
        'computer_choice': computer_choice,
        'result': result,
        'stats': stats
    })
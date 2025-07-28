from flask import Flask, render_template, request, session, redirect, url_for
import random

app = Flask(__name__)
app.secret_key = "nagyontitkoskulcs"  # session működéséhez szükséges

@app.route("/", methods=["GET", "POST"])
def index():
    if "wins" not in session:
        session["wins"] = 0
        session["losses"] = 0
        session["draws"] = 0

    result = ""

    if request.method == "POST":
        if "reset" in request.form:
            session["wins"] = 0
            session["losses"] = 0
            session["draws"] = 0
            return redirect(url_for("index"))

        user = request.form["choice"]
        computer = random.choice(["Kő", "Papír", "Olló"])

        if user == computer:
            result = f"Döntetlen! Gép is {computer}-t választott."
            session["draws"] += 1
        elif (user == "Kő" and computer == "Olló") or \
             (user == "Papír" and computer == "Kő") or \
             (user == "Olló" and computer == "Papír"):
            result = f"Nyertél! Gép {computer}-t választott."
            session["wins"] += 1
        else:
            result = f"Vesztettél! Gép {computer}-t választott."
            session["losses"] += 1

    return render_template(
        "index.html",
        result=result,
        wins=session["wins"],
        losses=session["losses"],
        draws=session["draws"]
    )

if __name__ == "__main__":
    app.run(debug=True)
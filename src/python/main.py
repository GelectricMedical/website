from flask import Flask, render_template

app = Flask(__name__, static_folder='../../resources',
            template_folder="../../resources/html")

@app.route("/")
def about():
    return render_template('index.html')

@app.route("/research")
def research():
    return render_template('research.html')

@app.route("/news")
def news():
    return render_template('news.html')

@app.route("/team")
def team():
    return render_template('team.html')

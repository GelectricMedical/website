from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__, static_folder='../../resources',
            template_folder="../../resources/html")

# Set the current year in the template context
@app.context_processor
def inject_current_year():
    return {'current_year': datetime.now().year}

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

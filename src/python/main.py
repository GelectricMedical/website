from flask import Flask, render_template, Response
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

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/dots.svg")
def dots():
    return Response(render_template('dots.svg'), content_type='image/svg+xml')

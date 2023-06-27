# Base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file to the working directory
COPY requirements.txt .

# Copy the resources dir over
COPY resources /app/resources
# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code to the working directory
COPY src/python /app/src/python

# Set the environment variable for the Flask app module
ENV YOUR_APP_MODULE=main:app

# Install Gunicorn
RUN pip install gunicorn

# Expose the port the Flask app will run on
EXPOSE 5000

# Start the Flask app using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "--chdir", "/app","--workers=4", "src.python.main:app"]

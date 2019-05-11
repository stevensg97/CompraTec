# Use an official Python runtime as a parent image
FROM python:3.7.3

# Set the working directory to /app
WORKDIR /catalog-service

# Copy the current directory contents into the container at /app
COPY . /catalog-service

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80:27017

# Define environment variable
ENV NAME Catalog

# Run app.py when the container launches
CMD ["python", "catalog.py"]
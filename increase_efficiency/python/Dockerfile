FROM python:alpine3.10
WORKDIR /app
# Adding COPY here for requirements file increases efficiency as mostly this can change and the rest of the layers will remain cached. This will build the image faster.
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5100
COPY . /app
CMD python ./launch.py

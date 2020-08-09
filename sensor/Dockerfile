FROM arm32v7/python:2
RUN apt-get update && apt-get -y install cron
WORKDIR /usr/sensor
COPY . /usr/sensor
RUN chmod +x sds011.py
RUN pip install -r requirements.txt
RUN echo "*/15 * * * * root python /usr/sensor/sds011.py > python /usr/sensor/sensor.log 2>&1" >> /etc/crontab
CMD ["cron", "-f"]

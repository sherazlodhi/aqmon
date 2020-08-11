FROM arm32v7/python:2
RUN apt-get update && apt-get -y install cron
WORKDIR /usr/sensor
COPY . /usr/sensor
RUN chmod +x sds011.py
RUN pip install -r requirements.txt
RUN . /proc/1/environ printenv | sed 's/^\(.*\)$/export \1/g' > /root/project_env.sh
RUN echo "*/15 * * * * root /usr/sensor/cronscript.sh >> err.log 2>&1" >> /etc/cron.d/sensorcron
RUN crontab /etc/cron.d/sensorcron
RUN chmod +x cronscript.sh
ENTRYPOINT ["sh","/usr/sensor/entrypoint.sh"]


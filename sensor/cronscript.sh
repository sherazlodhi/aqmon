#!/bin/bash -x
. /root/project_env.sh
env > /usr/sensor/env.ot 2>&1
python /usr/sensor/sds011.py >> /usr/sensor/sensor.log 2>&1


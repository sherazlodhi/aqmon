# Air Quality Sensor and graphical display
Air Quality sensor for reading and displaying particulate matter values in a nice way for NOVA SDS011. It displays the current and threshold values for PM10 and PM2.5

Displays a graph which can show data based on following filters

* Todays Readings
* This weeks Readings
* This months Readings
* This years Readings


# Tech
Made with following technologies

* Web: MERN (MongoDb, Express, React, Node) stack
* Sensor: Python 
* charts library: react-google-charts 

We will be using https://mlab.com/ for saving the data in mongodb

# Screenshots

Day summary graph
![Screenshot of graphs](http://sherazlodhi.com/assets/images/ss.png)
Day summary Table
![Screenshot of graphs](http://sherazlodhi.com/assets/images/sstable.png)

Weekly summary graph
![Screenshot of graphs](http://sherazlodhi.com/assets/images/weekgraph.png)

# configs.env

Add the following text in your configs.env file. which are transferred to docker container environment variables.

DB_URL="your connectionstring with inverted commas"

DB_NAME=dbname

DB_COLLECTION=collectionname

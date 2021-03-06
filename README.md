# Earthquake Depth and Magnitude

## Background

![1-Logo](Images/1-Logo.png)

The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

Build a new set of tools that will allow them visualize their earthquake data. The USGS collects a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.


## Objectives

### Basic Visualization

![2-BasicMap](Images/2-BasicMap.png)

First task is to visualize an earthquake data set.

#### Data Set

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

   ![4-JSON](Images/4-JSON.png)

#### Import & Visualize the Data

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   * Data markers will reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes will appear larger and earthquakes with greater depth should appear darker in color.  
	(Note: the depth of the earth can be found as the third coordinate for each earthquake)

   * Include popups that provide additional information about the earthquake when a marker is clicked.

   * Create a legend that will provide context for your map data.

   * Visualization will look something like the map above.

#### Currently Working On...

Plotting second data set on the map to illustrate the relationship between tectonic plates and seismic activity.  Will use data on tectonic plates from [here](https://github.com/fraxen/tectonicplates). 

   * Plot second data set on map 

   * Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently 

   * Add layer controls to the map

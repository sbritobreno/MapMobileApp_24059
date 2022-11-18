# MapMobileApp_24059
Project1 for MobileApp year 3

## Requirements

1.Display markers on the map
 [ x ] Load places and place types JSON data1
 [ x ] Display marker for all places using GPS coordinates
 [ x ] Use different colours, one for each place type
 [ x ] When marker is tapped, place name should be displayed on a pop-up info window
2.Show extended information
 [ x ] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)
 [ x ] Show the image of the place if available, else, show a random image loaded from the internet
 [ x ] Show a back button, when pressed, go back to map view
3.Allow filtering by Place Type
 [ x ] Show dropdown for selecting Place Type, default value should be all
 [ x ] When a specific Place Type is selected, show only the places with this Place Type on the map
4.Allow custom marker
 [ x ] Long Press anywhere on map to show a draggable marker
 [ x ] Show distance2 to the nearest place (from the downloaded data), and on drag marker, update this info
 [ x ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius
 [ x ] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly

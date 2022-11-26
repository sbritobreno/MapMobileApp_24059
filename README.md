# MapMobileApp_24059
Project1 for MobileApp year 3

## Breno Silva Brito
## ID:24059

## Requirements

### 1.Display markers on the map
- [x] Load places and place types JSON data1
- [x] Display marker for all places using GPS coordinates
- [x] Use different colours, one for each place type
- [x] When marker is tapped, place name should be displayed on a pop-up info window
### 2.Show extended information
- [x] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)
- [x] Show the image of the place if available, else, show a random image loaded from the internet
- [x] Show a back button, when pressed, go back to map view
### 3.Allow filtering by Place Type
- [x] Show dropdown for selecting Place Type, default value should be all
- [x] When a specific Place Type is selected, show only the places with this Place Type on the map
### 4.Allow custom marker
- [ ] Long Press anywhere on map to show a draggable marker
- [ ] Show distance2 to the nearest place (from the downloaded data), and on drag marker, update this info
- [ ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius
- [ ] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly

## Report
    On this first assessment for Mobile Apps Semester 2, we all have the option to decide which language/platform we would use to create a mobile application that should display a map places of literary importance in Ireland and the countries nearby, related to poets, patrons, and publishers who have lived in the 16th and 17th century, so I have decided to try something “new” for me, as I have some experience with React, I decided to create this App with React Native, to do that so I have followed along with the documentation of some libraries such as react-native-material to create some components like the navbar, tachyons to style some components, and the one that was most useful react-native-maps, which I have use to create the Map component that takes 80% of the home page, within the same library I have style the map in order to leave it with a dark theme, and also to create the markers and callouts that would navigate to another page (Marker Details), I have used built in functions such as fetch to make API request to the links provided on Moodle, and I have stored the results (JSON) of its promises in a variable set as a state and I have been carrying this state as props to other components including the Marker component which maps through this array and each object would be display as marker on the map, and for each markers it has a callout, when the user clicks the marker it shows up the name of the place and once the user clicks it, it takes them to another page where it shows more details such as coordinates, name, id, and etc. through this map function each marker has a marker colour style property, and for that it calls a function I have created that defines which colour it should have according to its place type. At first it took me a while to get used to the syntax even though it is really similar to React, however the Components tags are  a little be different and sometimes I was trying to use React components which was resulting in errors until I got used to know what I could and what I could not use from React into React Native, but at the end I could definitely learn a lot about React Native.

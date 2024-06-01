import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
const devImage = require("./Images/person.png");
const searchImageIcon = require("./Images/mynaui_search.png");
const filter = require("./Images/Filter.png");
const studyImage = require ("./Images/young woman working at desk.png")
const exerciseImage = require ("./Images/young woman working online.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.helloDevsFrame}>
          <View>
            <Text style={styles.helloDevs}>Hello, Devs</Text>
            <Text style={styles.todayTasks}>14 tasks today</Text>
          </View>
          <View style={styles.circle}>
            <Image source={devImage} style={styles.devImageStyle} />
          </View>
        </View>



        <View style={styles.searchBoxFrame}>
          <View style={styles.searchBox}>
            <View style={styles.searchImage}>
              <Image source={searchImageIcon} />
            </View>
            <Text style={styles.searchText}>Search</Text>
          </View>
          <View style={styles.filterImage}>
            <Image source={filter} />
          </View>
        </View>

        <View>
          <Text style={styles.categories}>Categories</Text>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <View style={styles.categoriesFrame}>
              
              <View style={styles.exerciseBox}>
                <Text style= {styles.bigText}>
                  Exercise
                </Text>
                <Text style= {styles.littleText}>
                    12 Tasks
                  </Text>
                  <Image source={exerciseImage}
                  style= {styles.imagesFormat} />
              </View>

              <View style={styles.studyBox}>
                <Text style= {styles.bigText}>
                  Study </Text>
                <Text style= {styles.littleText}>
                    12 Tasks
                </Text>
                <Image source={studyImage}
                style= {styles.imagesFormat} />
              </View>

            </View>
          </ScrollView>
        </View>

        <View>
            <Text style = {styles.ongoingText}> Ongoing </Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  helloDevsFrame: {
    marginTop: 40,
    marginLeft: 8,
    marginRight: 10,
    width: 354,
    height: 54,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  helloDevs: {
    color: "black",
    fontWeight: "800",
    fontSize: 32,
  },

  todayTasks: {
    color: "black",
    fontWeight: "500",
    fontSize: 12,
  },

  devImageStyle: {
    width: 46,
    height: 45,
  },

  searchBoxFrame: {
    marginTop: 45,
    width: 360,
    height: 49,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center', 
  },

  searchBox: {
    width: 280,
    height: 48,
    borderRadius: 14,
    backgroundColor: "white",
    flexDirection: 'row', 
    alignItems: 'center', 
  },

  searchText: {
    fontSize: 23,
    fontWeight: 700,
    marginLeft: 13,
  },

  searchImage: {
    marginLeft: 2,
    marginRight: 10, 
  },

  filterImage: {
    marginLeft: 13,
  },

  categories: {
    color: "black",
    marginTop: 50,
    marginBottom: 10,
    fontWeight: 700,
    fontSize: 24,
  },

  categoriesFrame: {
    width: 396,
    height: 220,
    marginTop: 5,
    flexDirection: 'row', 
  },

  exerciseBox: {
    width: 186,
    height: 200,
    borderRadius: 16,
    backgroundColor: "white",
    marginRight: 20, 
  },

  studyBox: {
    width: 186,
    height: 200,
    borderRadius: 16,
    backgroundColor: "white",
  },

  bigText: {
    margin: 10,
    fontSize: 24,
    fontWeight: 700,
  },

  littleText: {
    margin: 12,
    marginTop: -10,
    fontWeight: 500,
    fontSize: 15,
  },

  imagesFormat: {
    flex: 1
  },

  ongoingContainer: {
    width: 120,
    height: 24,
    fontSize: 20,
    marginTop: 200,
  },

  ongoingText: {
      color: "black",
      marginTop: 3,
      fontWeight: 700,
      fontSize: 24,

  },

});

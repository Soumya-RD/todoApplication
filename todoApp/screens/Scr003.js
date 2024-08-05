
// Today Task

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Scr003 = ({ navigation }) => {
  return (
    <View style={styles.Container}>

      {/* add button */}
      <TouchableOpacity onPress={() => navigation.navigate('Scr004')} style={styles.addContainer} >
        <Text style={styles.addText}>Add Task</Text>
      </TouchableOpacity>





      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          {/* Header */}
          <View style={styles.slnoView}>
            {/* sl no */}
            <Text style={styles.task}>Sl. No</Text>
          </View>
          <View style={styles.taskView}>
            {/* Task */}
            <Text style={styles.task}>Task</Text>
          </View>
          <View style={styles.timeView}>
            {/*Start Time */}
            <Text style={styles.task}>Start Time</Text>
          </View>
          <View style={styles.timeView}>
            {/* End Time */}
            <Text style={styles.task}>Finish Time</Text>
          </View>
          <View style={styles.editView}>
            {/* Edit */}
            <Text style={styles.task}>Edit</Text>
          </View>
          <View>
            {/* Status */}
            <View>
              {/* Complete */}
            </View>
            <View>
              {/* Incomplete */}
            </View>
          </View>
        </View>
        <View style={styles.taskView}>
          {/* task 1 */}

        </View>




      </View>
    </View>
  )
}

export default Scr003

const styles = StyleSheet.create({

  Container: {
    backgroundColor: '#cbdfbd',
    flex: 1
  },

  addContainer: {
    flexDirection: 'row',
    marginLeft: 270,
    marginTop: 10,
    borderWidth: 1,
    width: 80,
    borderRadius: 5,
    height: 30,
    backgroundColor: '#233d4d'

  },
  addText: {
    fontWeight: 'bold',
    marginTop: 3,
    fontSize: 16,
    marginLeft: 7,
    color: '#fff'



  },

  taskContainer: {
   
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#001427',
    height: 25,
    justifyContent: 'center'

  },
  taskHeader: {
    flexDirection: 'row',
    borderRadius: 5,

  },
  task: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eaf4f4'
  },
  slnoView: {
    width: 40,


  },
  taskView: {
    width: 100,
    borderLeftWidth: 3,
    borderColor: '#3c6e71'
  },
  timeView: {
    width: 80,
    borderLeftWidth: 3,
    borderColor: '#3c6e71'
  },
  editView: {
    width: 50,
    borderLeftWidth: 3,
    borderColor: '#3c6e71'
  },

})
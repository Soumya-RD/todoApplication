import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Scr004 = () => {
  return (
    <View style={styles.headContainer}>
      <View style={styles.Container}>
        {/* <View style={styles.AddTaskContainer}>
          <Text style={styles.AddTaskText}>Add  Activity</Text>
        </View> */}



        <View style={styles.StartTimeContainer}>

          {/* starting time */}

          <Ionicons name="time" size={24} color="black" style={{ paddingTop: 2 }} />
          <TextInput placeholder='Start Time' style={styles.StartTimeTextInput} />
        </View>



        <View style={styles.FinishTimeContainer}>

          {/* finish time */}

          <MaterialIcons name="access-time-filled" size={24} color="black" style={{ paddingTop: 2 }} />
          <TextInput placeholder='Finish Time' style={styles.FinishTimeTextInput} />
        </View>

        <View style={styles.taskContainer}>

          {/* Size shoued be <=15 */}
          <MaterialIcons name="task" size={24} color="black" style={{ paddingTop: 2 }} />
          <TextInput placeholder='Adding Task ' style={styles.taskTextInput} />

        </View>
        <View style={styles.ButtomContainer}>
          < TouchableOpacity style={styles.CancelView}>
            {/* Cancel Button */}
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SaveView}>
            {/* Save Button */}
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default Scr004

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: '#a4bab7',
    flex: 1
  },

  Container: {
    marginLeft: 10,
    marginTop: 100,


  },
  // AddTaskContainer: {
  //   borderWidth: 1,
  //   marginTop: 5,
  //   width: 100,
  //   marginLeft: 120,
  //   borderRadius: 5,
  //   backgroundColor:'#d9d9d9'
  // },
  // AddTaskText: {
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   height: 30,
  //   paddingTop: 5,
  //   fontSize: 18
  // },
  StartTimeContainer: {
    borderWidth: 1,
    width: 200,
    marginLeft: 70,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#d9d9d9'
  },
  StartTimeTextInput: {
    width: 130,
    textAlign: 'center',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  FinishTimeContainer: {
    borderWidth: 1,
    width: 200,
    marginLeft: 70,
    marginTop: 5,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#d9d9d9'
  },
  FinishTimeTextInput: {
    width: 130,
    textAlign: 'center',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  taskContainer: {
    borderWidth: 1,
    width: 200,
    marginLeft: 70,
    marginTop: 5,
    flexDirection: 'row',
    borderRadius: 10,
     backgroundColor:'#d9d9d9'
  },
  taskTextInput: {
    width: 130,
    textAlign: 'center',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  ButtomContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 105
  },
  CancelView: {
    borderWidth: 1,
    width: 60,
    height: 25,
    paddingTop: 2,
    borderRadius: 5,
    backgroundColor: '#d90429'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'


  },
  SaveView: {
    borderWidth: 1,
    width: 60,
    height: 25,
    paddingTop: 2,
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#283618'
  }
})
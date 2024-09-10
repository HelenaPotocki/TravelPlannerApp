import { StyleSheet } from "react-native";

const formStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    //backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textInput: {
    height: 44,
    color: '#5d5d5d',
    fontSize: 16,
  },
  datePicker: {
    width: '100%',
    marginVertical: 10
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '90%',  
    padding: 15,
    backgroundColor: '#fff',  
    borderRadius: 10,  
    alignItems: 'center',  
  },
  doneButton: {
    marginTop: 20,  
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
 });

 export default formStyle;
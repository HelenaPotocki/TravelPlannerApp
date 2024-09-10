import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const tripstyle = StyleSheet.create({
    listElementContainer: { 
    backgroundColor: '#F4DEB3',
    borderRadius: 20,
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    justifyContent: 'space-between', 
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  buttonsContainer: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  tripName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', 
  },
  tripDates: { 
    fontSize: 14,
    color: '#666666',
  },
  detailsButton: { 
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    //borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  detailsButtonText: { 
    color: '#4B3F00',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default tripstyle;
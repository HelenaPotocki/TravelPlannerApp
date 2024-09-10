import { Alert } from "react-native";

const deleteAlert = (objectToDelete, onDeleteAction) => {
  Alert.alert(
    "Confirm Delete",
    `Are you sure you want to delete this ${objectToDelete}?`,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        onPress: onDeleteAction,
        style: "destructive"
      }
    ]
  );
};

export default deleteAlert;

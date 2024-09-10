import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export const exportDatabase = async () => {
  const dbFileName = 'TravelPlannerDatabase.db';
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbFileName}`;
  

  const fileExists = await FileSystem.getInfoAsync(dbFilePath);
  
  if (fileExists.exists) {
    Sharing.shareAsync(dbFilePath);
  } else {
    console.log("Database file does not exist.");
  }
};

exportDatabase();

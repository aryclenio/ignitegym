import { Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
export default function App() {
  useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

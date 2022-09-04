import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Startup from "./src/navigation/Startup";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Startup />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

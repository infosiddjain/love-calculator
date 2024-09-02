import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screen/homeScreen";

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}

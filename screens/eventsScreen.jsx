import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from '@react-navigation/native';

function EventsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events first page!</Text>
      <Button
        onPress={() => {
          navigation.navigate("EventsSecond");
        }}
        title="Second Screen"
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events second page!</Text>
      <Button
          onPress={() => {
            navigation.navigate("EventsThird");
          }}
          title="Third Screen"
        ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgreen",
        }}
      >
        <Text>Events third page!</Text>
        <Button
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
          }}
          title="Back to Top"
        ></Button>
      </View>
    );
  }
  

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen}></Stack.Screen>
      <Stack.Screen
        name="EventsSecond"
        component={EventsSecondScreen}
      ></Stack.Screen>
    <Stack.Screen
        name="EventsThird"
        component={EventsThirdScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
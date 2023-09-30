import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { List, Card, Paragraph, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Home!</Text>
    //   </View>

    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Doraemon Day!</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloading our app!</Paragraph>
            <Paragraph>Welcome onboard.</Paragraph>
          </Card.Content>
          <Card.Cover
            style={{ marginTop: 10, height: 200}}
            resizeMode={"contain"}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
            }}
          ></Card.Cover>
        </Card>

        <List.Section title="Freqently Asked Questions">
          <List.Accordion title="What is Doraemon?">
          <List.Item title="Doraemon is a robotic cat from the future." />
          </List.Accordion>
          <List.Accordion title="What is the color of Doraemon?">
          <List.Item title="Blue with some hues of white" />
          </List.Accordion>
          </List.Section>

      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    objectFit: "contain",
  },
});

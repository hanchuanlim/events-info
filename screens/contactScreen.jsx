import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Card, Title, Paragraph, List } from "react-native-paper";

const contactsData = [
  {
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Adam ellis",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
];

const item = contactsData[0];

export default function ContactScreen() {
  return(
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={item.company, item.title}
              left={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  }

})
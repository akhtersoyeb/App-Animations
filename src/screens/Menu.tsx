import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const Menu = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basic Loop")}
        style={styles.menuItem}
      >
        <Text>Basic Loop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basic Pan Gesture")}
        style={styles.menuItem}
      >
        <Text>Basic Pan Gesture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Interpolate Scroll View")}
        style={styles.menuItem}
      >
        <Text>Interpolate Scroll View</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "90%",
    padding: 10,
    marginBottom: 8,
  },
});

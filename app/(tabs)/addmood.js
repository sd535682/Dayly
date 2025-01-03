import { StyleSheet, View, Text } from 'react-native';

export default function AddMood() {
  return (
    <View style={styles.homeContainer}>

      {/* Greeting */}
      <View>
        <Text>Hi, Subhadeep</Text>
        <Text>How are you feeling today?</Text>
      </View>

      {/* Mood Emojis */}
      <View>
        <Text>Timeline</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: 'column',
  },
})
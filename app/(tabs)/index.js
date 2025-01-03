import { StyleSheet, View, Text, SectionList } from 'react-native';
import { format } from "date-fns";
import { useEffect, useMemo, useState } from 'react';
import { timelineData } from '../../api/mockdata';
import HomeCards from '../components/homecards'

export default function HomeScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = useMemo(() => {
    return format(currentDate, 'dd MMM')
  }, [currentDate]);

  return (
    <View style={styles.homeContainer}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text>Today - {formattedDate}</Text>
      </View>

      {/* Greeting */}
      <View>
        <Text>Hi, Subhadeep</Text>
        <Text>How are you feeling today?</Text>
      </View>

      {/* Timeline */}
      <SectionList
        sections={timelineData || []}
        keyExtractor={item => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
        renderItem={({ item }) => <HomeCards item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

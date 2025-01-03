import { StyleSheet, Text, View } from "react-native";

export default function HomeCards({ item }) {
    return (
        <View style={styles.monthContainer}>
            <View style={styles.dateSection}>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={{ width: 2, backgroundColor: 'black', height: 50, marginHorizontal: 10 }} />
            <View style={styles.contentSection}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.title}>{item.emoji}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    monthContainer: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        marginVertical: 5
    },
    dateSection: {
        minWidth: 35,
        alignItems: 'center'
    },
    contentSection: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 10
    },
    date: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
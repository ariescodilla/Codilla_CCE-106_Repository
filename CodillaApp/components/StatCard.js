import { StyleSheet, Text, View } from 'react-native';
export default function StatCard(props) {
    return (
        <View style={[styles.card, { backgroundColor: props.bgColor }]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        borderRadius: 30,
        marginVertical: 15,
        width: '100%',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)',
        borderWidth: 3,
        borderColor: '#000000',
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: '600',
    },
    value: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10,
    },
});
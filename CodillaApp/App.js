import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MY CUSTOM DASHBOARD 📊</Text>

      {/* Rendering multiple cards using props */}
      <StatCard
        title="Total Users 👥"
        value="1,240"
        bgColor="#4f46e5"
      />

      <StatCard
        title="Revenue 💰"
        value="$12,450"
        bgColor="#059669"
      />

      <StatCard
        title="Pending Issues ⚠️"
        value="3"
        bgColor="#d97706"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde8ff',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#1f2937',
  },
});

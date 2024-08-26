import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, View } from 'react-native'
import { Plant } from 'my-shared'

type props = {
  plant: Plant
}
export default function PlantItem({ plant }: props) {
  return (
    <View key={plant.id} style={styles.plantContainer}>
      <ThemedText style={styles.plantName}>{plant.name}</ThemedText>
      <ThemedText style={styles.plantDescription}>
        {plant.description}
      </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  plantContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 16,
  },
  plantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  plantDescription: {
    fontSize: 14,
    color: 'black',
  },
})

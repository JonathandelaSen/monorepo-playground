import { FlatList, StyleSheet, View } from 'react-native'
import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useEffect, useState } from 'react'
import { Plant, PlantsGetter, PlantsSupabaseRepository } from 'my-shared'
import PlantItem from '@/sections/plants/list/PlantItem'

export default function TabPlantsScreen() {
  const [plants, setPlants] = useState<Plant[]>([])
  useEffect(() => {
    new PlantsGetter(new PlantsSupabaseRepository())
      .run()
      .then((plants) => {
        console.log(plants)
        setPlants(plants)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Plants</ThemedText>
      </ThemedView>

      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantItem plant={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    justifyContent: 'center',
  },
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

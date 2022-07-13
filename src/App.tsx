import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';

// import Navigation from './navigation';
// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import { Text } from 'react-native';
import SelectCategoryContainer from 'selectCategory/selectCategoryContainer';

registerRootComponent(App);

export default function App() {
    return (
      <SafeAreaProvider>
        <SelectCategoryContainer/>
        <StatusBar />
      </SafeAreaProvider>
    );
  // }
}

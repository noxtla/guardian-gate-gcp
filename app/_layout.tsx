// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'; // Importar useFonts

export default function RootLayout() {
  // Carga de fuentes personalizadas
  const [loadedFonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  console.log('Fonts loaded status:', loadedFonts); // AÑADE ESTA LÍNEAls 

  if (!loadedFonts) {
    // Retorna null o un Splash Screen mientras las fuentes se cargan
    // En producción, `expo-splash-screen` gestiona esto automáticamente.
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        {/* Aquí definimos las rutas de nuestro flujo de autenticación */}
        <Stack.Screen name="index" options={{ title: 'Guardian Gate' }} />
        <Stack.Screen name="otc" options={{ title: 'Enter Code' }} />
        <Stack.Screen name="ssn" options={{ title: 'Enter your SSN' }} />
        <Stack.Screen name="dob" options={{ title: 'Date of Birth' }} />
        <Stack.Screen name="year" options={{ title: 'Year of Birth' }} />
        <Stack.Screen name="biometric" options={{ title: 'Biometric Verification' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {/* Ruta para las tabs una vez autenticado */}
      </Stack>
      <StatusBar style="light" /> {/* Barra de estado en color claro */}
    </SafeAreaProvider>
  );
}

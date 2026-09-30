import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.intellipark.app',
  appName: 'intellipark-app',
  webDir: 'www',
  server: {
    // Permite llamar al backend local por HTTP desde el emulador (10.0.2.2)
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
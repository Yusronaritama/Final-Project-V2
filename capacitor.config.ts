import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
plugins: {
  SplashScreen: {
    launchShowDuration: 3000, // durasi tampil splash dalam ms
    launchAutoHide: false // kita kontrol sendiri hide-nya
  }
}
};


export default config;

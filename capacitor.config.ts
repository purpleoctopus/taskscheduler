import type { CapacitorConfig } from '@capacitor/cli';
import {KeyboardResize } from '@capacitor/keyboard';
import { SplashScreen } from '@capacitor/splash-screen';

const config: CapacitorConfig = {
  appId: 'com.denysostapiuk.taskscheduler',
  appName: 'TaskScheduler',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
      resizeOnFullScreen: true,
    },
    SplashScreen:{
      launchAutoHide: true,
      launchShowDuration: 0,
      //androidScaleType: 'CENTER_CROP',
      //iosSpinnerStyle: 'large',
      //backgroundColor: '#322531',
      //androidSpinnerStyle: 'large', 
      //splashFullScreen: true, 
      //splashImmersive: true
    }
  }
};

export default config;

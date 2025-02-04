import type { CapacitorConfig } from '@capacitor/cli';
import {KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.denysostapiuk.devlighttask',
  appName: 'DevlightScheduler',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
      resizeOnFullScreen: true,
    }
  }
};

export default config;

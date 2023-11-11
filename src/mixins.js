import { Plugins } from '@capacitor/core'
const { SplashScreen } = Plugins

export default {
  mounted() {
    SplashScreen.hide()
  }
}

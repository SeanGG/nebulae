import {
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Cell,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  Tabs,
  TabPane,
  Popup,
  Toast,
  Loading,
  ActionSheet,
  Modal,
  Confirm,
  Picker,
  DatePicker
 } from 'zarm-vue'

const install = function(Vue) {
  Vue.use(Input)
  Vue.use(Panel)
  Vue.use(PanelHeader)
  Vue.use(PanelBody)
  Vue.use(PanelFooter)
  Vue.use(Cell)
  Vue.use(Checkbox)
  Vue.use(Confirm)
  Vue.use(Toast)
  Vue.use(Alert)
  Vue.use(Popup)
  Vue.use(Button)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(Modal)
  Vue.use(ActionSheet)
  Vue.use(Picker)
  Vue.use(DatePicker)
  Vue.use(Loading.directive)

  Vue.prototype.$zaToast = Toast.root
  Vue.prototype.$zaLoading = Loading.root
  Vue.prototype.$zaAlert = Alert.root
  Vue.prototype.$zaConfirm = Confirm.root
}

export default install

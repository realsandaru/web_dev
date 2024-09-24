import { createApp } from 'vue'
import App from './App.vue' 
// Import global stylesheet 
import './styles/global.css'
// Import global components
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ContactForm from './components/ContactForm.vue'
import MainContent from './components/MainContent.vue'
import DonationForm from './components/DonationForm.vue'
// TODO: Import other global components as needed
const app = createApp(App)
// Register global components
app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)
app.component('ContactForm', ContactForm)
app.component('MainContent', MainContent)
app.component('DonationForm', DonationForm)
// TODO: Register other global components as needed
app.mount('#app')
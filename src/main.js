import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useFavs } from '@/stores/favs'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
app.use(router)


let favs = useFavs();

async function favsLoad() {

const res = await fetch (`http://localhost:3000/wishlistShows`, {
				method: 'GET'
			
		});
		
favs.shows = await res.json();
		
const res1 = await fetch (`http://localhost:3000/wishlistActors`, {
				method: 'GET'
			
});
		
favs.actors = await res1.json();

}

favsLoad();


import Layout from '@/layouts/Layout.vue'
import Wishlist from '@/components/Wishlist.vue'

app.component('Layout', Layout)
app.component('Wishlist', Wishlist)

app.mount('#app')

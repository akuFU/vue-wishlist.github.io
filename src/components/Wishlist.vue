<template>

		<div class = "relative">
			<button class = "border-2 rounded-xl p-2 pr-9 bg-white" @click = "showActors">Favourite actors</button>
			<span class = "bg-red-500 absolute -top-1 right-2 border-red-500 rounded-full px-2 text-white">{{favs.actors ? `${Object.keys(favs.actors).length}` : '0'}}</span>
		</div>
		<div class = "relative">
			<button class = "border-2 rounded-xl p-2 pr-9 bg-white" @click = "showShows">Favourite shows </button>
			<span class = "bg-red-500 absolute -top-1 right-2 border-red-500 rounded-full px-2 text-white">{{favs.shows ? `${Object.keys(favs.shows).length}` : '0'}}</span>
		</div>
		
		<div :class = "showingActors ? 'h-128 overflow-scroll border-8' : 'h-0 overflow-hidden border-0'" class = "transition-all duration-500 ease-in-out absolute text-center top-14 right-0 bg-white z-20">
			<div class = "grid grid-cols-1 gap-10 m-10 relative" >
				
				<router-link :to = "`/favourites/actors`" class = "border-2">Show full list</router-link>
				
				<div class = "flex flex-col" v-for = "item in favs.actors">
					<router-link :to = "`/actors/${item.id}`">
					<img class = "inline h-80" :src = "item?.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'" />
					</router-link>
					<button class = "bg-gray-200 border" @click = "favs.deleteWish(item, 'Actors')">Remove from wishlist</button>
					<p class = "py-2">Name: {{item.name}}</p>
				</div>
							
			</div>
			
		</div>
		
		<div :class = "showingShows ? 'h-128 overflow-scroll border-8' : 'h-0 overflow-hidden border-0'" class = "transition-all duration-500 ease-in-out absolute text-center top-14 right-0 bg-white z-20">
		
			<div class = "grid grid-cols-1 gap-10 m-10" >
			
				<router-link :to = "`/favourites/shows`" class = "border-2">Show full list</router-link>
			
				<div class = "flex flex-col" v-for = "item in favs.shows">
					<router-link :to = "`/shows/${item.id}`">
					<img class = "inline h-80" :src = "item?.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'" />
					</router-link>
					<button class = "bg-gray-200 border" @click = "favs.deleteWish(item, 'Shows')">Remove from wishlist</button>
					<p class = "py-2">Name: {{item.name}}</p>
					<div v-html = "viewName(item.summary)"></div>
				</div>
							
			</div>
		
		</div>
	

</template>
<script>
import { useFavs } from "@/stores/favs";
import { storeToRefs } from "pinia";
export default {

	data() {
	
		return {
		
			showingActors: false,
			showingShows: false,
			favs: ''
		
		}
	
	},
	
	methods: {
	
		showActors() {
		
			this.showingActors ? this.showingActors = false : this.showingActors = true;
			if (this.showingShows) { this.showingShows = false; }
			this.favs.switchFavs = true;
		
		},
		
		showShows() {
		
			this.showingShows ? this.showingShows = false : this.showingShows = true;
			if (this.showingActors) { this.showingActors = false; }
			this.favs.switchFavs = false;
			
		},
		
		viewName(text) {
		
			return text.substring(0, 100) + "..."
		
		}
	
	},
	
	async mounted() {
	
		this.favs = useFavs()
		console.log(this.favs.actors);
	
	}

}
</script>

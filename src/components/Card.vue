<template>

	<div class = "grid grid-cols-3 gap-[20px] max-[1500px]:grid-cols-2 max-[1100px]:grid-cols-1 max-[1100px]:mx-20">
		<div class = "h-80 relative border grid grid-cols-[min-content_auto]" v-if = "result.length" v-for = "item in result">
				
				<router-link class = "w-60" :to = "`/${$route.name.toLowerCase()}/${item.id}`" @click = "$route.name == 'Actors' ? favs.switchFavs = true : favs.switchFavs = false">
				<img class = "inline h-full" :src = "item?.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'" />
				</router-link>
				<span class = "w-full text-center self-center" >{{item.name}}</span>
				<button class = "absolute right-5 top-2" @click = "favs.addWish(item, $route.name)" v-if = "!checkFav(item)">&lt3</button>
				<button class = "absolute right-5 top-2" @click = "favs.deleteWish(item, $route.name)" v-if = "checkFav(item)">&lt/3</button>
				<div class = "absolute bg-red-500/40 w-full h-full pointer-events-none" v-if = "checkFav(item)"></div>
		</div>
	</div>

</template>

<script>

import { useFavs } from "@/stores/favs";
import { storeToRefs } from "pinia";

export default {

	props: {
	
		result: {
		
			type: Object,
			default() {
			
				return {}
			
			}
		
		}
	
	},
	
	data() {
	
		return {
		
			favs: ''
			
		}
		
	},
	
	async mounted() {
	
		this.favs = useFavs();
		console.log(this.$route.name)
	
	},
	
	methods: {
		
		checkFav(item) {
		console.log(this.favs[item.id]);
		if (this.$route.name == "Actors" || this.$route.params.id == 'actors') {
			
				return this.favs.actors[item.id] ? true : false
			
		} else {
			
				return this.favs.shows[item.id] ? true : false
			
		}
		
		/*
			let favourites = {};
			
			if (this.$route.name == "Actors" || this.$route.params.id == 'actors') {
			
				favourites = this.favs.actors;
			
			} else {
			
				favourites = this.favs.shows;
			
			}
			
			//console.log(favourites);
			
			for (let i of favourites) {
			
				if (i.id == item.id) {
				
					return true
				
				}
			
			}
			
			return false
		*/
		}
	
	}
	
}

</script>

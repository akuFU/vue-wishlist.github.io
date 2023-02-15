<template>

	<Layout>
		
		<Wishlist />
	
	</Layout>

	<div class = "flex justify-center">
		<div class = "grid grid-cols-3 gap-x-40 gap-y-20 max-[1500px]:grid-cols-2 max-[1100px]:grid-cols-1 max-[1100px]:mx-20">
			<div class = "flex flex-col w-[260px]" v-for = "item in list">
			
				<router-link class = "flex justify-center" :to = "`/${$route.params.id}/${item.id}`">
					<img class = "w-full h-72" :src = "item.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'" />
				</router-link>
				
				<div class = "flex flex-col">
				<p class = "text-center my-4">{{ item.name }}</p>
				<button class = "bg-gray-200 border" @click = "favs.deleteWish(item, $route.params.id)">Remove from wishlist</button>
				</div>
		 
			</div>
		</div>
	</div>

</template>

<script>

import { useFavs } from '@/stores/favs'
import { storeToRefs } from "pinia";

export default {

	data() {
	
		return {
		
			favs: useFavs(),
		
		}
	
	},
	
	computed: {
	
		list() {
		
			return this.$route.params.id == 'actors' ? this.favs.actors : this.favs.shows;
			
		}
	
	},

}

</script>

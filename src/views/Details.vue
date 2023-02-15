<template>

	<Layout>
		
			<Wishlist />
		
	</Layout>
	
	<div class = "flex justify-center">
	
		<div class = "flex justify-center bg-gray-300 w-2/4">
		
			<div class = "grid justify-items-center w-80 m-10">
				<img class = "w-full" :src = "detail?.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'" />
				<div class = "my-4">
					{{ detail.name }}
				</div>
				<div v-html = "detail.summary">
					
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
		
			detail: {},
			checker: {}
		
		}
	
	},

	mounted() {
	
		this.checker = useFavs();
		this.loader();
	
	},
	
	methods: {
	
		async loader() {
	
			if (this.$route.name == "actorsDetails") {
			
				const res = await fetch(`https://api.tvmaze.com/people/${this.$route.params.id}`, {
					method: 'GET',
					
				});
				
				this.detail = await res.json();
			
			} else {
			
				const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}`, {
					method: 'GET',
					
				});
				
				this.detail = await res.json();
			
			}
			
			console.log(this.checker.switchFavs);
		
		}
	
	},
	
	watch: {
	
		$route (to, from) {
		
			this.loader();
		
		}
	
	}

}
</script>

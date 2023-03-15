<template>
	

		<Layout>
		
			<Wishlist />
		
		</Layout>
		<div class = "flex justify-center py-8">
			<input class = "w-1/3 border border-solid border-gray-600 py-2 px-4" type = "text" placeholder = "search..." v-model = "searchValue" @input = "searchInput">
		</div>
		<Card  :result = "this.result" />
		
	
</template>

<script>

import Card from '@/components/Card.vue'
import Nav from '@/components/Nav.vue'
import { useFavs } from "@/stores/favs";
import { storeToRefs } from "pinia";
export default {

	components: {
	
		Card,
		Nav
	
	},
	
	data: () => ({
		searchValue: '',
		controller: new AbortController(),
		result: {},
	}),
	
	methods: {
	
		async search() {
		
			const response = await fetch (`https://api.tvmaze.com/search/people?q=${this.searchValue}`, {
				method: 'GET',
				signal: this.controller.signal
			
			});
			const data = await response.json();
			this.result = await data.map(item => ({
			
				...item.person
			
			}));
		
		},
		
		searchInput() {
		
			this.controller.abort();
			this.controller = new AbortController();
			this.search();
		
		},
		
		async addToWish() {
		
			const res = await fetch(`http://localhost:3000/wishlistActors`, {
				method: 'POST',
				headers: {
				
					'Content-Type': 'application/json'
				
				},
				body: JSON.stringify({
					"Name": "Check"
				}),
			});
			
			res.json().then(data => { console.log(data) });
		
		}
	
	}

}

</script>

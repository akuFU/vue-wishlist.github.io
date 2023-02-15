<template>
	
	<Nav />
	<div class = "flex justify-center py-8">
		<input class = "w-1/3 border border-solid border-gray-600 py-2 px-4" type = "text" placeholder = "search..." v-model = "searchValue" @input = "searchInput">
	</div>
	<Card  :result = "this.result" />
	
</template>

<script>

import Card from '@/components/Card.vue'
import Nav from '@/components/Nav.vue'
export default {

	components: {
	
		Card,
		Nav
	
	},
	
	data: () => ({
		searchValue: '',
		controller: new AbortController(),
		result: '',
		test: ''
	}),
	
	async mounted() {
	
		const response1 = await fetch (`http://localhost:3000/posts`, {
				method: 'GET'
			
			});
		this.test = await response1.json();
		console.log(this.test[0].title);
	
	},
	
	methods: {
	
		async search() {
		
			const response = await fetch (`https://api.tvmaze.com/search/people?q=${this.searchValue}`, {
				method: 'GET',
				signal: this.controller.signal
			
			});
			const data = await response.json()
			this.result = await data.map(item => ({
			
				...item.person
			
			}));
		
		},
		
		searchInput() {
		
			this.controller.abort();
			this.controller = new AbortController();
			this.search();
		
		}
	
	}

}

</script>

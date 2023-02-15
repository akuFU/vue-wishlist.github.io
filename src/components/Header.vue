<template>
<header class = "px-6 py-4">

	<div class = "flex justify-center py-8">
		<div v-for = "(item, index) in header">
			<router-link v-if = "item.name == $route.name" :to = "item.link" class = "text-base font-medium text-gray-600 disabled">{{item.name}}</router-link>
			<router-link v-else :to = "item.link" class = "text-base font-medium text-black">{{item.name}}</router-link>
			<span v-if = "index != header.length-1" class = "mx-8"> | </span>
		</div>
		<Nav v-if = "!header.length" />
	</div>

</header>
</template>

<script>

	import Nav from '@/components/Nav.vue'

	export default {
	
		data: () => ({
		
			header: []
		
		}),
		
		components: {
		
			Nav
		
		},
	
		methods: {
		
			async getHeader() {
			
				const res = await fetch('http://localhost:3000/posts')
				this.header = await res.json();
				console.log(this.header);
			
			}
		
		},
		
		mounted() {
		
			this.getHeader();
		
		}
	
	}

</script>

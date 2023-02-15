<template>

	<div>
	
		<v-header />
		<main class = "flex justify-center fixed top-2 right-2 z-20">
		
			<slot/>
		
		</main>
	
	</div>

</template>

<script>
import Header from '@/components/Header.vue'
export default {

	components: {
	
		'v-header': Header
	
	}

}
</script>

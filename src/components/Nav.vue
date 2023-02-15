<template>

	<div class = "flex justify-center px-8">
		<router-link :class = "'Actors' === $route.name ? 'text-gray-600' : 'text-black'" to = "/">Actors</router-link>
		<span class = "mx-8"> | </span>
		<router-link :class = "'Shows' === $route.name ? 'text-gray-600' : 'text-black'" to = "/shows">Shows</router-link>
	</div>

</template>

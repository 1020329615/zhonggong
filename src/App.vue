<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <hello/> -->		
		<router-view/>
	</div>
</template>

<script>
import hello from './components/HelloWorld';
export default {
	name: 'App',
	components: {
		hello
	}
}
</script>

<style>

</style>

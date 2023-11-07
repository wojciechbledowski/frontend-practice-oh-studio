<script lang="ts">
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';
	import animationData from '$lib/assets/footer-animation.json';

	let animationContainer: HTMLElement;
	onMount(() => {
		lottie.loadAnimation({ container: animationContainer, animationData });
	});
</script>

<footer class="px-20 py-12.5 flex items-center gap-5 max-md:flex-col">
	<div class="flex items-center gap-5 max-md:flex-col">
		<div class="h-[50px]" bind:this={animationContainer} />
		<p class="font-montreal text-sm">© WB 2023</p>
	</div>
	<div class="md:ms-auto flex gap-7.5">
		<p class="font-montreal text-sm cursor-pointer hover:text-black/50">Twitter</p>
		<p class="font-montreal text-sm cursor-pointer hover:text-black/50">Linkedin</p>
		<p class="font-montreal text-sm cursor-pointer hover:text-black/50">Mail</p>
	</div>
</footer>

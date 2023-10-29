<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<nav class="sticky top-0 py-15 flex justify-center">
	<div class="flex gap-2 bg-light-gray/50 backdrop-blur-lg p-2 rounded-full w-[300px]">
		<a
			href="/"
			class="flex justify-center items-center rounded-full grow h-20"
			class:bg-white={routeId === '/'}
		>
			<p class="font-montreal text-sm">Home</p>
		</a>
		<a
			href="/profile"
			class="flex justify-center items-center bg-white rounded-full grow h-20"
			class:bg-white={routeId === '/profile'}
		>
			<p class="font-montreal text-sm">Profile</p>
		</a>
		<a
			href="/contact"
			class="flex justify-center items-center bg-white rounded-full grow h-20"
			class:bg-white={routeId === '/contact'}
		>
			<p class="font-montreal text-sm">Contact</p>
		</a>
	</div>
</nav>

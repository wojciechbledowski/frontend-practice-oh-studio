<script>
	import man from '$lib/assets/man.jpg';
	import tablet from '$lib/assets/tablet.jpg';
	import tablet2 from '$lib/assets/tablet2.jpg';
	import earrings from '$lib/assets/earrings.jpg';
	import display from '$lib/assets/display.jpg';
	import phone from '$lib/assets/phone.jpg';
	import laptop from '$lib/assets/laptop.jpg';
	import key from '$lib/assets/key.jpg';
	import tablet3 from '$lib/assets/tablet3.jpg';
	import phone2 from '$lib/assets/phone2.jpg';
	import phone3 from '$lib/assets/phone3.jpg';
	import dance from '$lib/assets/dance.jpg';
</script>

<div class="p-10 md:p-20 h-[50vh] xl:h-[70vh] flex flex-col justify-center items-center gap-20">
	<h1
		class="text-4xl max-w-[700px] md:text-5xl md:max-w-[620px] xl:text-7xl xl:max-w-[730px] font-medium text-center tracking-tight"
	>
		A brand and product designer working with clients globally
	</h1>
	<div class="max-md:hidden flex gap-5 justify-center items-center">
		<p class="font-montreal text-sm">Expertise</p>
		<div class="flex rounded-full bg-light-gray px-6 py-4">
			<p class="font-montreal text-sm">Branding</p>
		</div>
		<div class="flex rounded-full bg-light-gray px-6 py-4">
			<p class="font-montreal text-sm">Product</p>
		</div>
		<div class="flex rounded-full bg-light-gray px-6 py-4">
			<p class="font-montreal text-sm">Design Systems</p>
		</div>
	</div>
</div>

<div class="p-10 md:p-20 grid md:grid-cols-2 gap-x-10 gap-y-20">
	<img src={man} alt="grid element 1" class="rounded-xl" />
	<img src={tablet} alt="grid element 2" class="rounded-xl" />
	<img src={tablet2} alt="grid element 3" class="rounded-xl" />
	<img src={earrings} alt="grid element 4" class="rounded-xl" />
	<img src={display} alt="grid element 5" class="rounded-xl" />
	<img src={phone} alt="grid element 6" class="rounded-xl" />
	<img src={laptop} alt="grid element 7" class="rounded-xl" />
	<img src={key} alt="grid element 8" class="rounded-xl" />
	<img src={tablet3} alt="grid element 9" class="rounded-xl" />
	<img src={phone2} alt="grid element 10" class="rounded-xl" />
	<img src={phone3} alt="grid element 11" class="rounded-xl" />
	<img src={dance} alt="grid element 12" class="rounded-xl" />
</div>

<div
	class="p-10 md:p-20 h-[40vh] md:h-[30vh] xl:h-[50vh] flex flex-col justify-center items-center"
>
	<h2 class="text-3xl md:text-4.5xl font-medium text-center tracking-tight">
		Let's work together.
	</h2>
	<h2
		class="text-3xl md:text-4.5xl font-medium text-center tracking-tight cursor-pointer text-black/50 hover:text-black/25"
	>
		Get in touch.
	</h2>
</div>

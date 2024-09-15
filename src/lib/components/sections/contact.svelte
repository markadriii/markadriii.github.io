<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import emailjs from '@emailjs/browser';
	import { PUBLIC_PUBLIC_KEY, PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID } from '$env/static/public';

	export let id: string;
	export let spacing: string;

	let name: string = '';
	let email: string = '';
	let message: string = '';

	const sendEmail = async (event: Event): Promise<void> => {
		try {
			const response = await emailjs.sendForm(
				PUBLIC_SERVICE_ID,
				PUBLIC_TEMPLATE_ID,
				event.target as HTMLFormElement,
				{
					publicKey: PUBLIC_PUBLIC_KEY
				}
			);
			console.log('Message sent!', response);
			resetForm();
		} catch (error) {
			if (error instanceof Error) {
				console.log('Message not sent!', error.message);
			} else {
				console.log('Message not sent!', error);
			}
		}
	};

	const resetForm = () => {
		name = '';
		email = '';
		message = '';
	};

	// TODO: Validation
</script>

<SectionContainer {id} {spacing}>
	<div class="flex w-full flex-col items-start justify-center space-y-8">
		<div class="w-full border-b-2 pb-2">
			<h1 class="text-left text-xl font-bold">Contact</h1>
		</div>
		<form
			class="flex w-full flex-col items-center space-y-4 text-sm"
			on:submit|preventDefault={sendEmail}
		>
			<label class="label w-full">
				Your name <span class="text-error-500">*</span>
				<div
					class="input-group input-group-divider h-10 grid-cols-[1fr_auto] rounded-container-token"
				>
					<input
						type="name"
						name="name"
						class="p-2 text-sm"
						placeholder="Enter name"
						bind:value={name}
					/>
				</div>
			</label>
			<label class="label w-full">
				Your email <span class="text-error-500">*</span>
				<div
					class="input-group input-group-divider h-10 grid-cols-[1fr_auto] rounded-container-token"
				>
					<input
						type="email"
						name="email"
						class="p-2 text-sm"
						placeholder="Enter email"
						bind:value={email}
					/>
				</div>
			</label>
			<label class="label w-full">
				Your message <span class="text-error-500">*</span>
				<div
					class="input-group input-group-divider grid-cols-[1fr_auto] rounded-container-token"
				>
					<textarea
						class="textarea p-2"
						name="message"
						rows="4"
						placeholder="Enter message"
						bind:value={message}
					/>
				</div>
			</label>
			<div class="w-fit">
				<button
					type="submit"
					class="variant-filled-primary btn btn-sm mt-4 w-fit px-4 py-2 font-semibold rounded-container-token hover:bg-primary-500/50 hover:text-on-surface-token"
					>Submit</button
				>
			</div>
		</form>
	</div>
</SectionContainer>

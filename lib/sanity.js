import {groq, createClient, createImageUrlBuilder, createPreviewSubscriptionHook, createPortableTextComponent,} from 'next-sanity';

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
};

export const imageBuilder = (source) => createImageUrlBuilder(config).image(source);
// Create a urlFor function that we can use for assets in the codebase
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const client = createClient(config);
export const previewClient = createClient({
	...config,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
// Create a PortableText component. We use the stock config so no serializers are necessary
export const PortableText = createPortableTextComponent({
	...config,
	serializers: {},
});

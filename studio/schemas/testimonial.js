export default {
	name: 'testimonial',
	title: 'Testimonial',
	type: 'document',
	fields: [
		{
			name: 'clientName',
			title: 'Client Name',
			type: 'string',
		},

		{
			name: 'testimonialText',
			title: 'Testimonial Text',
			type: 'blockContent',
		},
		{
			name: 'testimonialExcerpt',
			title: 'Testimonial Excerpt',
			type: 'string',
			validation: (Rule) => Rule.max(342).warning(`The Excerpt shouldn't be more than 342 characters.`),
			validation: (Rule) => Rule.required(),
		},
	],
};

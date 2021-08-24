
import * as FaIcons from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export default function Testimonial({testimonials}) {
	
	return (
		<>
			<section className='flex flex-col bg-testimonial-image bg-cover bg-no-repeat bg-right-top h-testimonial'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover'>
					<h4 className='flex justify-center text-primary-default mt-28 -ml-6 md:text-lg lg:text-2xl font-tradeCondensed tracking-widest'>
						What My Clients Say
					</h4>
					<h2 className='text-gray-300 uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl font-thin'>
						Testimonials
					</h2>
					<ul>
					{/*Carousel options to get it to automatically move on the page*/}
					<Carousel
					showArrows={false}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={true}
						showIndicators={false}
						interval={7000}>
						{testimonials.map((testimonial) => (
						
							
								<div className='flex flex-row p-12 text-gray-200 lg:max-w-2xl items-center mx-auto font-trade' key={testimonial._id}>
									<span className='text-2xl block pr-4 text-gray-200'>
										<FaIcons.FaQuoteLeft />
									</span>
									
									<div className='flex flex-col'>
										
										<p className='text-gray-200'> {testimonial.testimonialExcerpt}</p>
										
										<span  className='flex font-xs font-bold text-gray-200 justify-end font-tradeCondensed tracking-wide'>
											{testimonial.clientName}
										</span>
									</div>
									<span className='text-2xl text-gray-200 block pl-4'>
										<FaIcons.FaQuoteRight />
									</span>
								</div>
				
					
				))}
		
					</Carousel>
					</ul>
				</div>
			</section>
		</>
	);
}

import * as FaIcons from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export default function Testimonial ({ testimonials }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

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
              swipeable={false}
              arrows={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={false}
              customTransition='all .5'
              transitionDuration={500}
            >
              {testimonials.map(testimonial => (
                <div
                  className='flex flex-row p-12 text-gray-200 lg:max-w-2xl items-center mx-auto font-trade'
                  key={testimonial._id}
                >
                  <span className='text-2xl block pr-4 text-gray-200'>
                    <FaIcons.FaQuoteLeft />
                  </span>

                  <div className='flex flex-col'>
                    <p className='text-gray-200'>
                      {' '}
                      {testimonial.testimonialExcerpt}
                    </p>

                    <span className='flex font-xs font-bold text-gray-200 justify-end font-tradeCondensed tracking-wide'>
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
  )
}

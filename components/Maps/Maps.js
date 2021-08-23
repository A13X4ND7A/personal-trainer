import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
function Maps() {
	const googlemap = useRef(null);
	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_API_KEY,
		});
		let map;
		loader.load().then(() => {
			map = new google.maps.Map(googlemap.current, {
				center: {lat: 51.38162, lng: -2.35805},
				zoom: 12,
			});
		});
	});
	return <div id='map' className='h-96' ref={googlemap} />;
}
export default Maps;

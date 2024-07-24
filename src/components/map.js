'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '1600px',
	height: '400px',
	margin: '0 auto',
};

const center = { 
	lat: 50.43484454924232,
	lng: 30.501824833400608,
};

function Map() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'My_API_KEY',
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
            const loader = new Loader(
                "My_API_KEY", 'weekly'
            );
            const {Map} = await loader.importLibrary('maps');
            const position = {
                lat: 50.434824019460926, 
                long: 30.50181408100176
            }
        }
        initMap();
    });

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		></GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(Map);

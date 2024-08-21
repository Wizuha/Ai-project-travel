import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
  return (
    <div>
      <h2 className="font-bold text-lg">Endroits à visiter</h2>
      <div>
        {trip?.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium text">{item.day}</h2>
            {item.locations.map((place, index) => (
              <div>
                <h2 className='font-medium text-sm text-orange-600'>{place.visitTime}</h2>
                <PlaceCardItem place={place} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit
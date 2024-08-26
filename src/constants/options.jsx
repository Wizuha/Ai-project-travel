export const SelectTravelesList = [
  {
    id: 1,
    title: "Just me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 people",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 Peoples",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 Peoples",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵️",
    people: "5 to 10 Peoples",
  },
];
export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  }
]

// export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays) Days for {traveler) with a {budget} budget, give me hotels list with hotelName, hotelAddress, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, place Details, place Image Url, Geo Coordinates, ticket Pricing, timeToVisit ,timeToTravel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";

export const AI_PROMPT = `
  Generate a detailed travel plan in JSON format for the location: {location} for {totalDays} days for {traveler} with a {budget} budget.

  The JSON should include:

      1. **hotels**:
        - A list of hotels with the following details:
          - "hotelName": The name of the hotel.
          - "hotelAddress": The address of the hotel.
          - "price": The price per night in €, including a range if applicable.
          - "hotelImageUrl": The URL of the hotel's image.
          - "geoCoordinates": The geographic coordinates of the hotel (latitude and longitude).
          - "rating": The hotel's rating (out of 5).
          - "description": A description of the hotel.

      2. **itinerary**:
        - A detailed plan for each day with the following details:
          - "day": The day of the itinerary in the format "Day X".
          - "plan": A list of activities with the following details:
            - "placeName": The name of the place to visit.
            - "placeDetails": A description of the place.
            - "placeImageUrl": The URL of the place's image.
            - "geoCoordinates": The geographic coordinates of the place (latitude and longitude).
            - "ticketPricing": The price of the entrance ticket in euros.
            - "timeToVisit": The opening hours of the place.
            - "timeToTravel": The time required to travel to the place from the previous location, specified in hours or minutes.
For {totalDays} days with each day plan with best time to visit in JSON format.
`;

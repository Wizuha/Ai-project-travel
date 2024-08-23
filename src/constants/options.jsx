export const SelectTravelesList = [
  {
    id: 1,
    title: "Just me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 Personnes",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 à 5 Personnes",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵️",
    people: "5 à 10 Personnes",
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

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays) Days for {traveler) with a {budget} budget, give me hotels list with hotelName, hotelAddress, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, place Details, place Image Url, Geo Coordinates, ticket Pricing, timeToVisit ,timeToTravel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
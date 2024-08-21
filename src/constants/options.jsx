export const SelectTravelesList = [
  {
    id: 1,
    title: "Juste moi",
    desc: "Un voyage solitaire en exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "Un couple",
    desc: "Deux voyages en tandem",
    icon: "🥂",
    people: "2 Personnes",
  },
  {
    id: 3,
    title: "Famille",
    desc: "Un groupe chaleureux",
    icon: "🏡",
    people: "3 à 5 Personnes",
  },
  {
    id: 4,
    title: "Amis",
    desc: "Une bande d'amateurs de sensations fortes",
    icon: "⛵️",
    people: "5 à 10 Personnes",
  },
];
export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Bon marché",
    desc: "Restez conscient des coûts",
    icon: "💵",
  },
  {
    id: 2,
    title: "Modéré",
    desc: "Maintenir le coût à un niveau moyen",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxe",
    desc: "Pas d'inquiètude au niveau des coûts",
    icon: "💸",
  }
]

export const AI_PROMPT = "Générez un itinéraire pour le lieu : {location}, couvrant {totalDays} jours pour {traveler}, avec un budget de {budget}. Fournissez une liste d'options d'hôtels incluant le nom, le prix,l'adresse ,l'URL de l'image, les coordonnées géographiques, l'évaluation, et une description de chaque hôtel. De plus, incluez des suggestions d'itinéraires journaliers avec le nom des lieux à visiter, les détails des lieux, l'URL de l'image, les coordonnées géographiques, les prix des billets, et le temps de visite de chaque lieu, pour l'ensemble des {totalDays} jours, présenté en format JSON.";
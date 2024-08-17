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

export const AI_PROMPT = "Générez un plan pour le lieu : {location}, pour {totalDays} jour pour {traveler} avec un budget {budget}, donne moi une liste d'otpions d'hotels avec le nom de l'hôtel, le prix, l'url de l'image de l'hôtel, les coordonnées géographiques,l'évaluation, les descriptions et les suggestions itinéraires avec le nom du lieu, les détails du lieu, l'url de l'image du lieu, les coordonnées géographiques, les prix des billets, le temps de voyage entre chaque lieu pour {totalDays} jours avec chaque plan journalier et le meilleur moment en fonction de la météo du jour pour visiter en format JSON "
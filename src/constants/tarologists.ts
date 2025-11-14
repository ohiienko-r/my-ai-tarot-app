import Eva from "../assets/eva.png";
import EvasBg from "../assets/galaxy.png";

export const TAROLOGISTS = [
  {
    id: "t0",
    name: "Eva",
    avatar: Eva,
    bg: EvasBg,
    spreads: [
      {
        id: "s0",
        name: "Card of the day",
        cost: 2,
        description: `'Card of the Day' is a Tarot spread where one card is
        drawn to provide advice or a prediction for the current day. 
        This method helps focus on the day's energy and offers a hint 
        about what might happen or what to concentrate on.`,
      },
      {
        id: "s1",
        name: "Yes/No",
        cost: 3,
        description: `The 'Yes / No' tarot spread is a simple and direct 
        method used to get a clear answer to a specific question. 
        It typically involves drawing one card, which is then interpreted 
        to give a 'yes' or 'no' response based on the card's meaning and position.`,
      },
      {
        id: "s2",
        name: "Ask a question",
        cost: 5,
        description: `The classic three-card tarot spread is a simple yet highly 
        effective method of divination used to gain a deeper understanding of a situation. 
        This spread helps uncover the past, present, and future aspects of a situation 
        or question of interest. The first card represents the past, the second card 
        represents the present, and the third card represents the future.`,
      },
    ],
  },
];

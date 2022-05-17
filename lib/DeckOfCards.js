class DeckOfCards {
  /**
   * @property {array} cards - The cards in this deck.
   */
  #cards = [];

  /**
   * @constructor
   * @returns {array} - Array containing a shuffled deck of cards.
   */
  constructor() {
    // Build the deck.
    this.#cards = this.#buildDeck();

    return this.#cards;
  }

  /**
   * Builds a deck of cards.
   */
  #buildDeck = () => {
    // Define deck.
    const deck = [];

    // Define card suits.
    const cardSuits = ["CLUBS", "DIAMONDS", "HEARTS", "SPADES"];

    // Define card names.
    const cardNames = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    // Loop through suits and names.
    for (const cardSuit of cardSuits) {
      for (const cardName of cardNames) {
        deck.push({
          name: cardName,
          suit: cardSuit,
        });
      }
    }

    return this.#shuffleArray(deck);
  };

  #shuffleArray = (arr) => {
    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };
}

export default DeckOfCards;

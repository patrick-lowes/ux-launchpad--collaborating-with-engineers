import { ReactComponent as Spades } from "../../assets/spades.svg";
import { ReactComponent as Hearts } from "../../assets/hearts.svg";
import { ReactComponent as Diamonds } from "../../assets/diamonds.svg";
import { ReactComponent as Clubs } from "../../assets/clubs.svg";

const suitMap = {
  clubs: Clubs,
  hearts: Hearts,
  spades: Spades,
  diamonds: Diamonds
};

const CardSuit = ({ suit = "hearts" }) => {
  const Component = suitMap[suit];

  return <Component />;
};

export default CardSuit;

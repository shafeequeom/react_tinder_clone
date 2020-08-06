import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Erlich Bachman",
      url: "https://3djakob.github.io/react-tinder-card-demo/img/erlich.jpg",
    },
    {
      name: "Richard Hendricks",
      url: "https://3djakob.github.io/react-tinder-card-demo/img/richard.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://3djakob.github.io/react-tinder-card-demo/img/dinesh.jpg",
    },
  ]);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card "
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

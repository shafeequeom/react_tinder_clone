import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen degeneres"
        message="Hey how are you ?"
        timestamp="40 Sec ago"
        profilePic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F07%2F27%2Fellen-degeneres.jpg"
      />
      <Chat
        name="Bilal"
        message="Kochi is not old kochi"
        timestamp="2 Min ago"
        profilePic="https://keralakaumudi.com/web-news/en/2019/12/NMAN0111083/image/mammootty.1.441053.jpg"
      />
      <Chat
        name="Stefan Nedubally"
        message="Narcotics is dirty business"
        timestamp="2 Min ago"
        profilePic="https://static.toiimg.com/photo/msid-68990313/68990313.jpg?resizemode=4&width=400"
      />
    </div>
  );
}

export default Chats;

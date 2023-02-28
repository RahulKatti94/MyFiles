import React from "react";



const Emoji = () => {

    const [emojis, setEmojis] = React.useState([
        {
          id: 1,
          emoji: "😁"
        },
        {
          id: 2,
          emoji: "😘"
        },
        {
          id: 3,
          emoji: "😍"
        },
        {
          id: 4,
          emoji: "😜"
        }
      ]);
      const deleteEmoji = emojiId => {
        const updatedEmojis = emojis.filter(emoji => emoji.id !== emojiId);
        setEmojis(updatedEmojis);
      };
    
      return (
        <div>
          <h1>Rate these emojis!</h1>
          {emojis.map((emoji, i) => (
            <li className="emoji-item">
              {emoji.emoji}
              <select>
                <option>Bad</option>
                <option>Okay</option>
                <option>Very good</option>
              </select>
              <button onClick={() => deleteEmoji(emoji.id)}>Delete</button>
            </li>
          ))}
        </div>
      );
  
}

export default Emoji
import React from 'react';

function Emojis (props) {
    return props.parentState.map(function (emojiObject, i) {
        return (
            <span 
                key={i}
                className="singleEmoji"
                onClick={props.handleEmojiClick}
            >{emojiObject.symbol}</span>
        )
    })
}


export default Emojis;

import React from 'react';

const Comment = (props) => {
    const { author, dateTime, content, avatar } = props;
    return (
/*         <div >
            <img src="logo192.png" alt="funk" style={{float: 'left'}}/>
            <div >
               <h2 style={{display: 'inline'}}>{name}</h2> <span>{date}</span>
               <p >{title}</p>
               <p style={{clear: 'both'}}></p>
            </div>
        </div> */
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {author}
                    </a>
                    <div className="metadata">
                        <span className="date">{dateTime}</span>
                    </div>
                    <div className="text">{content}</div>
                </div>
            </div>
    )
}

export default Comment;
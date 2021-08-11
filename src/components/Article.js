import React from 'react';

const Article = (props) => {
    const styles = {
        marginTop: "40px",
        color: "black"

    }
    return (
        <article style={styles}>
            <h2>{props.tittle}</h2>
            <span>{props.author}</span>
            <p>{props.text}</p>
        </article>);
}

export default Article;
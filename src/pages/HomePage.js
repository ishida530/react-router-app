import React from 'react';
import Article from '../components/Article'


const articles = [{
    id: 1,
    tittle: "czym jest cos",
    author: "jan nowak",
    text: "lorem lorem lorem lorem lorem lorem "
}, {
    id: 2,
    tittle: "artykul 2",
    author: "jan nowak",
    text: "lorem lorem lorem lorem lorem lorem "
}, {
    id: 3,
    tittle: "artykul 3",
    author: "jan nowak",
    text: "lorem lorem lorem lorem lorem lorem "
}]
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>);
}

export default HomePage;
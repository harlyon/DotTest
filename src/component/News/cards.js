import { useContext, useEffect } from 'react';
import NewsContext from '../../context/newsContext';
import Card from './card';

const Cards = () => {
  const { getHeadlines, all_news, loading } = useContext(NewsContext);

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <div>
      <section className="news-area ptb-50">
      <div className="container-fluid">
        <div className="row">
      {
        all_news.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
        </div>
        </div>
        </section>
    </div>
  );
};

export default Cards;
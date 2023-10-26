import React from "react";
import { faker } from "@faker-js/faker";
import "./Course.css";

const FeaturedArticles = () => {
  const articles = [
    {
      name: "The Art Of Imperfection, by Kishore Asthana (2016)",
      description:
        "To see a world in a grain of sand and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.",
      rating: 4.5,
      image:
        "https://www.speakingtree.in/a/639232-350-250-5/art-of-imperfection.img",
    },
    {
      name: "What is Patriarchy, by Alda Facio (2013)",
      description:
        "A comprehensive overview of Patriarchy, emphasizing its historical, cultural, and structural dimensions, and how it continues to shape and influence societies today.",
      rating: 4.8,
      image:
        "https://th.bing.com/th/id/OIP.c0arJbwhsWvwhoaYADlHCwHaE0?pid=ImgDet&rs=1",
    },
    {
      name: "Mohhamed Rafi - The Finest of the Bygone era, by Swati Parashar (2020)",
      description:
        "Mohammed Rafi will remain the voice of India, but his songs belong to the entire world that embraced him and to all those who are filled with hope and optimism for the future, whenever they listen to his melodies.",
      rating: 4.2,
      image:
        "https://images.indianexpress.com/2020/07/Mohammed-Rafi-death-anniversary-759.jpg",
    },
  ];

  const tutorials = [
    {
      title: "Fusion 360 Course",
      description: "Best For Begginers and learn in 30 days!",
      link: "https://www.youtube.com/watch?v=d3qGQ2utl2A",
      image:
        "https://i.ytimg.com/vi/d3qGQ2utl2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAd-Gxs_Gif62lTHF-M1AEwpnh-ig",
    },
    {
      title: "How to be better",
      description: "Making changes in life for the better",
      link: "https://youtu.be/F_uN10VdIdM?si=VomARSPKUgyOO77q",
      image:
        "https://i.ytimg.com/vi/F_uN10VdIdM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7i8vP0hSu8t5cvUA9RX2TavgK2A",
    },
    {
      title: "How to Build a Start-Up",
      description: "Quite Interactive, knowledgeable and Motivating.",
      link: "https://www.youtube.com/watch?v=AUdi3xR-OnQ",
      image: faker.image.imageUrl(), // Use faker to generate a random image URL
    },
  ];

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img
              src={article.image}
              alt={article.name}
              className="article-image"
            />
            <h3>{article.name}</h3>
            <p>{article.description}</p>
            <div className="rating">Rating: {article.rating}</div>
          </div>
        ))}
      </div>
      <button className="see-more-button">See More Articles</button>
      <div className="featured-tutorials">
        <h2 className="section-title">Featured Tutorials</h2>
        <div className="tutorial-list">
          {tutorials.map((tutorial, index) => (
            <div className="tutorial" key={index}>
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="tutorial-image"
              />
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a
                href={tutorial.link}
                className="tutorial-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Tutorial
              </a>
            </div>
          ))}
        </div>
      </div>
      <button className="see-more-tutorials">See More Tutorials</button>

      <div className="newsletter-signup">
        <h2 className="section-title">Sign Up for the Newsletter</h2>
        <p>Stay updated with the latest articles and tutorials.</p>
        <form action="/subscribe" method="post">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default FeaturedArticles;

import "./ArticleCallout.css";

const ArticleCallout = () => {
  return (
    <article className="article">
      <figure>
        <img
          src="https://corporate.lowes.com/sites/lowes-corp/files/Content%20Images/Stewards-For-The-Greater-Good.jpg?imwidth=580"
          alt="Lowe's associate holding a log during a community service event"
        />
        <cite>
          <a
            href="https://corporate.lowes.com/our-responsibilities"
            rel="noreferrer"
            target="_blank"
          >
            https://corporate.lowes.com/our-responsibilities
          </a>
        </cite>
      </figure>

      <div className="content">
        <h1>Stewards For The Greater Good</h1>
        <p>
          We have a responsibility to the customers and communities we serve to
          make their homes, neighborhoods and environment better. Keep scrolling
          to learn more about our impact on the world around us.
        </p>
      </div>
    </article>
  );
};

export default ArticleCallout;

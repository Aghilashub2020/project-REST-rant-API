const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main className="home">
        <h1>REST-Rant</h1>
        <div>
          <img className="food-image" src="/images/nadine-primeau.jpg" alt="food-image" />
        </div>
        <div className="credit">
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
          <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}
module.exports = home;

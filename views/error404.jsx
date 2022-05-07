const React = require("react");
const Def = require("./default");
function error404() {
  return (
    <Def>
      <main className="main-page404">
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img className="img404" src="../images/toa-heftiba.jpg" alt="image error" />
      </main>
    </Def>
  );
}
module.exports = error404;

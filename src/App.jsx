import ArrowImg from "./assets/arrow.svg";

function App() {
  return (
    <>
      <div className="app">
        <section className="section-1">
          <header>
            <h1>portfolio</h1>
            <ul>
              <li>instagram</li>
              <li>twitter</li>
              <li>codepen</li>
            </ul>
          </header>
          <main>
            <div>canvas</div>
          </main>
        </section>
        <section className="section-2">What is Lorem Ipsum?</section>
        <section className="section-3">
          <aside>
            <div className="top">Where does it come from?</div>
            <div className="bottom">
              <img src={ArrowImg} alt="" />
              <img src={ArrowImg} alt="" />
            </div>
          </aside>
          <article>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </article>
        </section>
        <section className="section-4">
          <canvas></canvas>
          <aside>
            <h1>Javascript</h1>
            <h2>⭐️⭐️⭐️⭐️⭐️</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </aside>
        </section>
      </div>
      <footer>
        <div className="email">test@gmail.com</div>
      </footer>
    </>
  );
}

export default App;

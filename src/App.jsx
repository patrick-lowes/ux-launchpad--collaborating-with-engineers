import "./styles.css";
import FlexboxBox from "./components/FlexboxBox/FlexboxBox";
import ArticleCallout from "./components/ArticleCallout/ArticleCallout";
import LaunchpadGeniuses from "./components/LaunchpadGeniuses/LaunchpadGeniuses";

export default function App() {
  return (
    <div className="App">
      <h1>Example - Rem? em</h1>
      <h2>
        <code>
          <span>HTML font-size: </span>
          {window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("font-size")}
        </code>
        <p style={{ fontSize: "1rem" }}>This is 1rem</p>
        <p style={{ fontSize: "2rem" }}>This is 2rem</p>
      </h2>

      <hr />

      <h1>Example - Box Model</h1>
      <div
        style={{
          width: "12rem",
          height: "12rem",
          margin: "1rem auto",
          border: "0.5rem solid rebeccapurple",
          padding: "1rem",
          backgroundColor: "#B4D455",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem"
          }}
        >
          <h1>Some Content</h1>
        </div>
      </div>

      <hr />

      <h1>Example - Layout</h1>

      <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <FlexboxBox variant="space-between">
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </FlexboxBox>

        <FlexboxBox variant="space-around">
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </FlexboxBox>

        <FlexboxBox variant="space-evenly">
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </FlexboxBox>
      </div>

      <hr />

      <h1>Example - Article Layout</h1>
      <ArticleCallout />

      <hr />

      <h1>Example - Playing Card Build</h1>
      <LaunchpadGeniuses />

      <hr />

      <h1>Resources</h1>

      <ul>
        <li>
          <a
            href="https://www.figma.com/proto/EFkuw8Ta7INcRFyrTUdkAq/UX-Launchpad---Collaborating-with-Engineers?page-id=4%3A3&node-id=17%3A3&viewport=-19256%2C1048%2C1.65&scaling=contain"
            rel="noreferrer"
            target="_blank"
          >
            Presentation
          </a>
        </li>

        <li>
          <a
            href="https://photoshopetiquette.com/"
            rel="noreferrer"
            target="_blank"
          >
            Photoshop Etiquette
          </a>
        </li>

        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            rel="noreferrer"
            target="_blank"
          >
            CSS Basics
          </a>
        </li>

        <li>
          <a
            href="https://uxdesign.cc/why-designers-should-move-from-px-to-rem-and-how-to-do-that-in-figma-c0ea23e07a15"
            rel="noreferrer"
            target="_blank"
          >
            Use rems
          </a>
        </li>

        <li>
          <a
            href="https://reactjs.org/docs/thinking-in-react.html"
            rel="noreferrer"
            target="_blank"
          >
            Thinking in React
          </a>
        </li>
      </ul>

      <hr />

      <h1>Extra Credit Googlin' Topics</h1>

      <ul>
        <li>CSS Grid</li>
        <li>@media queries</li>
        <li>HTML tags and semantics</li>
        <li>CSS Selectors</li>
      </ul>
    </div>
  );
}

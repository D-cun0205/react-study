import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// The first letter of the component name should be capitalized.
function Header() {
    // The variable can use with '{' and '}' tags in the html code.
    let description = reactDescriptions[getRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function CoreConcept({ image, title, description }) {
    return (
      <li>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
      </li>
    );
}

// If you want to use the Header component in the App component, you need to wrap it with '<' and '>' tags.
// Also, the component must be inside a JSX fragment.
function App() {
    return (
        <div>
            <Header /> {/* or <Header></Header> */}
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;

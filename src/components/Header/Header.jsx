import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// The first letter of the component name should be capitalized.
export default function Header() {
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

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
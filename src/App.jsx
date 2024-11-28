import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TapButton from "./components/TapButton.jsx";

// If you want to use the Header component in the App component, you need to wrap it with '<' and '>' tags.
// Also, the component must be inside a JSX fragment.
function App() {
    // The useState of React hooks must be in the highest scope that if function is a nested function.
    // And React hooks have to call in the React component function
    // Right down!
    const [selectedTopic, setSelectedTopic] = useState('Please click any button.');

    function handleSelect(selectedTopic) {
        setSelectedTopic(selectedTopic);
    }

    return (
        <div>
            <Header /> {/* or <Header></Header> */}
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/*
                            or <TapButton>Write contents</TapButton>
                            then TapButton(props.children) or TapButton({ children })

                            Please note that the children parameter will contain all values
                            between the opening <TapButton> and closing </TapButton> tags.

                            When you use like this:

                            <TapButton label="Components" />
                        */}

                        <TapButton onSelect={() => handleSelect('components')}>Components</TapButton>
                        <TapButton onSelect={() => handleSelect('jsx')}>JSX</TapButton>
                        <TapButton onSelect={() => handleSelect('props')}>Props</TapButton>
                        <TapButton onSelect={() => handleSelect('state')}>State</TapButton>
                    </menu>
                    <pre>
                        {selectedTopic}
                    </pre>
                </section>
            </main>
        </div>
    );
}

export default App;

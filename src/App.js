import React, {createContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Photos from "./components/Photos";
import Section from "./components/Section";
import Footer from "./components/Footer";
import AdvGroup from "./components/AdvGroup";
import Loading from "./components/Loading";

// Create the context
const DataContext = createContext();

function App() {
    const advantages = [
        ["Stress Relief", "Interacting with puppies is known to reduce stress levels."],
        ["Improved Mental Health", "Spending time with animals has been shown to increase levels of oxytocin, the happy hormone, and decrease cortisol, the stress hormone."],
        ["Enhanced Yoga Experience", "The presence of puppies can make yoga sessions more enjoyable and engaging, encouraging participants to look forward to their practice."],
        ["Support for Shelters", "Many puppy yoga sessions are organized in collaboration with animal shelters or rescue organizations."],
        ["Support for Shelters", "Many puppy yoga sessions are organized in collaboration with animal shelters or rescue organizations."]
    ];

    const [isLoading, setLoading] = useState(true);

    const data = { advantages };

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, []);

    return (
        <DataContext.Provider value={data}>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="App">
                    <Navbar />
                    <Header />
                    <Photos setLoading={setLoading} />
                    <Section
                        question='What is Puppy Yoga?'
                        content="Puppy yoga is a delightful and unique experience that combines traditional yoga practices with the joy of interacting with playful puppies. During a typical class, participants engage in a series of yoga poses and stretches, all while adorable puppies roam freely around the room. These furry companions might curl up next to yogis, play with each other, or even join in on the poses. The presence of puppies adds an element of fun and relaxation, making the practice more enjoyable and less intense."
                        reverse={false}
                    />
                    <AdvGroup />
                    <Footer />
                </div>
            )}
        </DataContext.Provider>
    );
}

export default App;
export { DataContext };

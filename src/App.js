import React, {createContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import AdvGroup from "./components/AdvGroup";
import Loading from "./components/Loading";
import BookDiv from "./components/BookDiv";
import TicketsDiv from "./components/TicketsDiv";

import stressRelief from './components/stress-relief.png';
import yoga from './components/yoga.png';
import pet from './components/pet.png';

// Create the context
const DataContext = createContext();

function App() {
    const advantages = [
        ["Stress Relief", "Interacting with puppies is known to reduce stress levels.",stressRelief],
        ["Enhanced Yoga Experience", "The presence of puppies can make yoga sessions more enjoyable and engaging, encouraging participants to look forward to their practice.", yoga],
        ["Support for Shelters", "Many puppy yoga sessions are organized in collaboration with animal shelters or rescue organizations.", pet],
    ];

    const options = [
        'option1', 'option2', 'option3'
    ]


    const data = { advantages };

    return (
        <DataContext.Provider value={data}>
                <div className="App">
                    <Navbar />
                    <Header />
                    <BookDiv options={options}/>
                    <Section
                        question='What is Puppy Yoga?'
                        content="Puppy yoga is a delightful and unique experience that combines traditional yoga practices with the joy of interacting with playful puppies. During a typical class, participants engage in a series of yoga poses and stretches, all while adorable puppies roam freely around the room. These furry companions might curl up next to yogis, play with each other, or even join in on the poses. The presence of puppies adds an element of fun and relaxation, making the practice more enjoyable and less intense."
                        reverse={false}
                    />
                    <AdvGroup />
                    <TicketsDiv />
                    <Footer />
                </div>
        </DataContext.Provider>
    );
}

export default App;
export { DataContext };

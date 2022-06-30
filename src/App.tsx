import React from 'react';
import './App.css';
import { DropDown } from "./components/DropDown";
import { IOption } from "./types";

const defaultOptions: IOption[] = [
    { name: 'Education 🎓' },
    { name: 'Yeeeah, science! ⚗️' },
    { name: 'Art 🎭' },
    { name: 'Sport ⚽️' },
];

const App: React.FC = () => {
    return (
        <div className="demo-container">
            <DropDown defaultOptions={defaultOptions} />
        </div>
    );
};

export default App;

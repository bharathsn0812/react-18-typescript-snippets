import React, { useState } from 'react';

// Define the type for the props
interface TemperatureInputProps {
    temperature: string;
    onTemperatureChange: (newTemperature: string) => void;
}

/**
 * This component handles the input for temperature.
 * It uses props to get the temperature value and the function to update it.
 */
const TemperatureInput: React.FC<TemperatureInputProps> = ({ temperature, onTemperatureChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
};

/**
 * The parent component manages the state for the temperature and passes it down to TemperatureInput as props.
 * This demonstrates "lifting state up".
 */
const Calculator: React.FC = () => {
    const [temperature, setTemperature] = useState('');

    return (
        <div>
            <TemperatureInput 
                temperature={temperature} 
                onTemperatureChange={setTemperature} 
            />
        </div>
    );
};

export default Calculator;

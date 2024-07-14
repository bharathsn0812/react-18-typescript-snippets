// CustomHooks.ts

/*
 * Custom Hooks
 * ------------
 * Custom hooks allow you to extract component logic into reusable functions.
 * They start with 'use' and can call other hooks inside them.
 */

// Example of a custom hook
import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
};

// Example usage of the custom hook
import React from 'react';

const FetchComponent: React.FC = () => {
    const { data, loading } = useFetch('https://api.example.com/data');

    if (loading) {
        return <p>Loading...</p>;
    }

    return <div>{JSON.stringify(data)}</div>;
};

export default FetchComponent;

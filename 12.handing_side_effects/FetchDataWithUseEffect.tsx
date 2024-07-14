import React, { useEffect, useState } from 'react';

const FetchDataWithUseEffect: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // useEffect runs after the component mounts
    const fetchData = async () => {
      try {
        // Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        // Update the state with the fetched data
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataWithUseEffect;

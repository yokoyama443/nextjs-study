"use client"

import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // JSONPlaceholderのテストAPIを使用
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result =  await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // クリーンアップロジック
      // ここでは特にクリーンアップする必要がないため、空のままです
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetchingComponent;

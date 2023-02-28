// UserData.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get('http://example.com/api/data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Welcome, {data.name}!</p>
      <p>Your email address is {data.email}.</p>
    </div>
  );
}

export default UserData;

'use client';

import { useEffect, useState } from 'react';

export default function SimplyRetsListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const res = await fetch('https://api.simplyrets.com/properties', {
          headers: {
            'Authorization': 'Basic ' + btoa('simplyrets:simplyrets') // Replace this!
          }
        });

        const data = await res.json();
        setListings(data);
        console.log(data);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  if (loading) return <p>Loading listings...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((home, index) => (
        <div key={index} className="border rounded-xl p-4 shadow">
          <img
            src={home.photos?.[0] || '/no-image.jpg'}
            alt="Listing"
            className="rounded-xl w-full h-48 object-cover mb-2"
          />
          <p className="font-semibold">{home.address?.full}</p>
          <p>{home.property?.bedrooms} bd | {home.property?.bathsFull} ba | {home.property?.area} sqft</p>
          <p className="text-green-600 font-bold">${home.listPrice?.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

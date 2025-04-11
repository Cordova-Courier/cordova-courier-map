const map = L.map('map').setView([39.8283, -98.5795], 4); // Center of the US

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  "San Diego, CA", "Orange County, CA", "Ontario, CA", "Los Angeles, CA", "Bakersfield, CA", "Fresno, CA",
  "Portland, OR", "Seattle, WA", "Las Vegas, NV",
  "Tuscan, AZ", "Phoenix, AZ",
  "Albuquerque, NM", "Salt Lake City, UT",
  "Denver, CO", "Colorado Springs, CO",
  "Dallas, TX", "Houston, TX", "Austin, TX", "San Antonio, TX",
  "Tulsa, OK", "Oklahoma City, OK",
  "Salt Lake, MO", "Kansas City, MO",
  "Chicago, IL", "Lincoln, NE", "Des Moines, IA",
  "New Orleans, LA", "Nashville, TN", "Memphis, TN",
  "Birmingham, AL", "Louisville, KY", "Indianapolis, IN",
  "Milwaukee, WI", "Grand Rapids, MI", "Detroit, MI",
  "Cleveland, OH", "Columbus, OH", "Dayton, OH", "Cincinnati, OH",
  "Atlanta, GA", "Buffalo, NY", "Rochester, NY", "Albany, NY", "New York, NY",
  "Boston, MA", "Worcester, MA", "Providence, RI",
  "Bridgeport, CT", "New Haven, CT", "Hartford, CT",
  "Allentown, PA", "Pittsburgh, PA", "Philadelphia, PA", "New Jersey",
  "Baltimore, MD", "Washington DC",
  "Charlotte, NC", "Greensboro, NC", "Raleigh, NC",
  "Norfolk, VA", "Richmond, VA",
  "Charleston, SC", "Columbia, SC", "Greensville, SC",
  "Miami, FL", "Jackson, FL", "Orlando, FL", "Tampa, FL", "Fort Myers, FL"
];

locations.forEach(city => {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then(data => {
      if (data && data[0]) {
        const { lat, lon } = data[0];
        L.marker([lat, lon]).addTo(map)
          .bindPopup(`<strong>${city}</strong><br>Coverage Area`);
      }
    });
});

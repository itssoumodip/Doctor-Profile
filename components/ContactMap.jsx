'use client'

export default function ContactMap({ location = { lat: 22.5726, lng: 88.3639 } }) {
  // Using OpenStreetMap static image
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.lng-0.01}%2C${location.lat-0.01}%2C${location.lng+0.01}%2C${location.lat+0.01}&layer=mapnik&marker=${location.lat}%2C${location.lng}`
  
  return (
    <iframe 
      width="100%" 
      height="100%" 
      frameBorder="0" 
      scrolling="no" 
      marginHeight="0" 
      marginWidth="0" 
      src={mapUrl}
      title="Office Location Map"
      className="rounded-xl"
    ></iframe>
  )
}
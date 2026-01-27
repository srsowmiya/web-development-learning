import React from 'react'

// We "destructure" the props in the parentheses ()
export default function Entry({ img, title, country, googleMapsLink, dates, text }) {
  
  // Safety check: if img is missing, don't crash the app
  if (!img) return null 

  return (
    <article className="journal-entry">
      <div className="main-image-container">
        {/* Use img.src directly from the destructured props */}
        <img 
          className="main-image" 
          src={img.src} 
          alt={img.alt} 
        />
      </div>
      <div className="info-container">
        <span className="country">{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{text}</p>
      </div>
    </article>
  )
}
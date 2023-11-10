import React from "react";
import "./UnsplashImage.css"; // Import the component-specific CSS file

function UnsplashImage() {
  // Replace this URL with the one you copied from Unsplash
  const imageUrl = "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const backgroundStyles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="image-container" style={backgroundStyles}>
      {/* Your other content goes here */}
    </div>
  );
}

export default UnsplashImage;

import React, { useEffect, useState } from "react";

const RandomChristmasBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Your Unsplash API access key
    const accessKey = "qMecoUoiF9QbhBBBmiAO7Mr6bovg_IIw2IHTtrbOjfo";

    // Fetch a random Christmas background image
    fetch(`https://api.unsplash.com/photos/random?query=christmas&client_id=${accessKey}`)
      .then((response) => response.json())
      .then((data) => {
        setBackgroundImage(data.urls.regular);
      });
  }, []);

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="background" style={backgroundStyles}>
      {/* Your other content */}
    </div>
  );
};

export default RandomChristmasBackground;

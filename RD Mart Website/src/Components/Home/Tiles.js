import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/Tiles.css';

const Tiles = () => {
    const imageList = [
      { src: require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        title:"Drinks",
        description:"Visit us for a variety of delicious non-alcoholic drinks! From fruity to herbal, we have something for everyone. Come find your new favorite beverage!"
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        title:"Beers",
        description:"Quench your thirst with our selection of crisp and refreshing beers. From light lagers to robust ales, we have the perfect brew waiting for you."
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock3.jpg'),
        title:"Wine",
        description:"Indulge in the rich flavors of our handpicked wines. From bold reds to crisp whites, elevate any occasion with our hand picked exquisite selections."
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock3.jpg'),
        title:"Cigarettes",
        description:"Find your preferred cigarettes at our store, offering a variety of brands and options. Enjoy your smoke break with convenience and quality."
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        title:"Vapes",
        description:"Discover a world of flavor with our diverse range of vaping products. Elevate your vaping experience with our quality devices and e-liquids."
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        title:"Candies",
        description:"Sweeten your day with our tempting array of candies. From classic favorites to new delights, there's something for every sweet tooth."
      },
      { src: require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        title:"Chips&Snack",
        description:"Savor the crunch with our savory snacks. Whether you're a fan of chips, pretzels, or nuts, we've got the perfect snack for any craving."
      }
    ];
  
    return (
    <div className="Tiles">
          <h1>Products</h1>
      <div className="TilesWrapper">
        {imageList.map((image, index) => (
          <div className="Tile" key={index}>
            <img src={image.src} alt={`Tile ${index + 1}`} />
            <div className="TileTextWrapper">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Tiles;
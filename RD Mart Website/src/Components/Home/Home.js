import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/Home.css';
import Logo from './Logo';
import NavBar from '../Shared/NavBar';
import WordArtOpenHours from './WordArtOpenHours';
import Jackpot from './Jackpot';
import StoreLocator from './StoreLocator';
import Tiles from './Tiles';
import OpenHours from './OpenHours';
import Footer from '../Shared/Footer';
import ImageCarousel from './ImageCarousel';
import ProductList from './ProductList';
import ServicePageLink from './ServicePageLink';

const Home = () =>{
    return(
      <div className="Home">
      <Logo/>
      <NavBar/>
      <ImageCarousel/>
      <Jackpot/>
      <StoreLocator/>
      <Tiles/>
      <ServicePageLink/>
      <WordArtOpenHours/>
      <OpenHours/>
      <ProductList/>
      <Footer/>
      </div>
      );
}
export default Home;
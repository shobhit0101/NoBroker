import SearchHeader from "../../components/search-header/search-header.component"
import CardList from "../../components/card-list/card-list.component";
import Directory from "../../components/directory/directory.component";
import HeroCard from "../../components/hero-card/haro-card.component";
import SearchContainer from "../../components/search-container/search-container.component";
import BodyCards from "../../components/body-cards/body-cards.component";
import MailButton from "../../components/mail-button/mail-button.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Navigation from "../navigation/navigation.component";
import "./home.styles.css";
// import "../navigation/navigation.component";



const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Sell/Rent property',
      imageUrl: 'https://source.unsplash.com/270x250/?estate',
    },
    {
      id: 2,
      title: 'Buying a home',
      imageUrl: 'https://source.unsplash.com/270x250/?realestate',
    },
    {
      id: 3,
      title: 'PG and co-living',
      imageUrl: 'https://source.unsplash.com/270x250/?bedroom',
    },
    {
      id: 4,
      title: 'Renting a home',
      imageUrl: 'https://source.unsplash.com/270x250/?diningroom',
    },
  ];

  const properties = [
    {
      id: 1,
      title: 'Delhi',
      imageUrl: 'https://source.unsplash.com/300x300/?delhi',
    },
    {
      id: 2,
      title: 'Mumbai',
      imageUrl: 'https://source.unsplash.com/300x300/?mumbai',
    },
    {
      id: 3,
      title: 'Chennai',
      imageUrl: 'https://source.unsplash.com/300x300/?chennai',
    },
    {
      id: 4,
      title: 'Darjeeling',
      imageUrl: 'https://source.unsplash.com/500x500/?darjeeling',
    },
    {
      id: 5,
      title: 'Kerala',
      imageUrl: 'https://source.unsplash.com/500x500/?kerala',
    },
  ];


  return (
    <>
      <Navigation />
      <SearchHeader />
      {/* <HeroCard /> */}
      <SearchContainer />
      <div className="home-content">
        <br /><div className="home_h3"><h3>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h3></div><br /><br />
        <div className="cardlist-div">
          <br />
          <CardList categories={categories} />
          <br />
        </div>
        <br /><br />
        <h6 className="my-4" style={{ color: "#96968d", fontFamily: "'Poppins', sans-serif", fontWeight: "700", textAlign: "center" }}>FOR ALL YOUR PROPEERTY RELATED NEEDS - We got a portal that has all</h6>

        <BodyCards />

        <p style={{ fontSize: "50px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", color: "#7d9644ad", textAlign: "center", marginTop: "2vh" }}>Price is what you pay. <br /> Value is what you get...</p><br /><br />
        {/* <MailButton /><br /><br /><br /><br /> */}
        <h1 style={{ "fontFamily": "'Poppins', sans-serif", "fontWeight": "700", "fontSize": "50px", marginBottom: "10vh" }}>Explore Real Estate in Popular Indian Cities</h1>
        <div className="directory-div">
          <Directory properties={properties} />
        </div>




        <Testimonials />
        <br /><br /><br /><br />        <br /><br /><br /><br />

      </div>
    </>
  )
}

export default Home
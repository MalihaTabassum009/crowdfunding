import React from "react";
import { Link } from 'react-router-dom';
import Cards from "./Cards/Cards.jsx";
import "./LandingPage.css"; 
import { FaSearch } from "react-icons/fa";

const handleBookmarkClick = () => {
    console.log("Card added to favorites");
};

function LandingPage() {
    return (
        <>
            <div className="landing-page"> {/* to wrap the whole code of .jsx and change the background specifically */}
                <nav className="nav">
                    <div className="nav-logo">
                        <h2>LOGO .</h2>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="#" className="link active">Home</a></li>
                            <li><a href="#" className="link">About</a></li>
                            <li><a href="#" className="link">Services</a></li>
                            <li><a href="#" className="link">Contact</a></li>
                        </ul>
                    </div>
                    <div className="nav-button">
                        <button className="start-btn" id="startbtn">Start a Project</button>
                        <Link to="/login">
                            <button className="btn" id="loginBtn">Login</button>
                        </Link>
                    </div>
                </nav>

                {/* Search bar below navigation */}
                <div className="search-bar-container">
                    <div className="search-bar-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" className="search-bar" placeholder="Search Projects, Companies, Categories, Location..." />
                    </div>
                    <button className="search-btn">Search</button>
                </div>

                <div className="cards-container">
                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Card Title'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={13}
                        fundStat={34}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Apparel'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='New York, NY'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Card Title 2.0'
                        description='Some Boastful ranting about some idea of that certain company.'
                        button1Text='Product Type'
                        button1Link='https://www.merriam-webster.com/dictionary/apparel'
                        button2Text='Location'
                        button2Link='https://en.wikipedia.org/wiki/New_York_City' />

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Card Title 3.0'
                        description='Short Description about individual Card.'
                        button1Text='Button 1'
                        button1Link='https://www.merriam-webster.com/dictionary/apparel'
                        button2Text='Button 2'
                        button2Link='https://en.wikipedia.org/wiki/New_York_City' />

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Card Title'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={29}
                        fundStat={16}
                        description='Short Description about individual Card.' />

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Kawya Kader'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={6} 
                        fundStat={1} /* ei 2tay 0 dile kaaj hoy na kn? */
                        description='She has made us stan troller. she has made us writer. she has made us fry in the non-stick cookware...'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Raven'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Gopalganj, Gopali'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick} />       
                </div>
            </div>
        </>
    );
}

export default LandingPage;

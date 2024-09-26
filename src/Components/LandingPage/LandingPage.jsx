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
                        cardTitle='Project 1.0'
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
                        cardTitle='Project 2.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={11}
                        fundStat={3}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Art'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Austin, TX'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 3.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={23}
                        fundStat={4}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Games'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Long Island, NY'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 4.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={25}
                        fundStat={7}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Food'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Dortmund, Germany'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 5.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={6} 
                        fundStat={1} /* ei 2tay 0 dile kaaj hoy na kn? */
                        description='She has made us stan troller. she has made us writer. she has made us fry in the non-stick cookware...'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Music'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='San Diego, CA'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick} /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 6.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={19}
                        fundStat={49}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Design'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='New York, NY'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />  

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 7.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={2}
                        fundStat={89}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Apparel'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='San Diego, CA'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    /> 

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 8.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={10}
                        fundStat={34}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Photography'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Liverpool, UK'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />  

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 9.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={13}
                        fundStat={30}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Games'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='San Diego, CA'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />      

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 10.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={32}
                        fundStat={9}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Crafts'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Dortmund, Germany'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />      

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 11.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={8}
                        fundStat={92}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Games'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Long Island, NY'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />      

                    <Cards 
                        imgSrc='https://picsum.photos/300/200' 
                        imgAlt="Card pic" 
                        cardTitle='Project 12.0'
                        companyName='Company/Brand Name'
                        companyLink='https://stocksnap.io/search/nature'
                        daysLeft={87}
                        fundStat={5}
                        description='Short Description about individual Card.'
                        logoSrc='https://picsum.photos/50/30'
                        button1Text='Apparel'  
                        button1Link='https://www.kickstarter.com/discover/categories/fashion/apparel' 
                        button2Text='Austin, TX'  
                        button2Link='https://www.kickstarter.com/discover/places/new-york-ny'
                        onBookmarkClick={handleBookmarkClick}
                    />               
                </div>
            </div>
        </>
    );
}

export default LandingPage;

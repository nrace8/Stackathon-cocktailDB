// create home component that will be rendered by App component
// home component should display a welcome background image and a welcome message
import React from 'react';


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <h1 className="home__title">Welcome to Quq</h1>
                <p className="home__text">Quq is a social media app that allows you to share your thoughts with the world.</p>
            </div>
        </div>
    );
}

export default Home;
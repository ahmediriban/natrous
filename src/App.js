import React, { Component } from 'react';

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Stories from "./components/Stories/Stories";
import Book from "./components/Book/Book";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/PopUp/Popup";


class App extends Component {
    state={
        popup: false
    };

    popupToggle=()=>{
        this.setState({popup: !this.state.popup})
    };

    render() {
        let popup = null;
        if(this.state.popup){
            popup = <Popup clicked={this.popupToggle}/>;
        }
        return (
            <div>
                <Navigation/>
                <Header/>
                <main>
                    <About/>
                    <Features/>
                    <Tours clicked={this.popupToggle}/>
                    {popup}
                    <Stories/>
                    <Book/>
                </main>
                <Footer/>

            </div>
        );
    }
}

export default App;

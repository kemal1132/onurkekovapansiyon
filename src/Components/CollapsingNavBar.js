import React, { Component } from 'react';
import throttleFunction from '../UsefulMethods/Throttle';
import styles from './CollapsingNavBar.module.css';
class CollapsingNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {scrollingDown: false, lastScrollPosition:0}
        this.handleScroll=this.handleScroll.bind(this);
    }
 
    handleScroll(e){
        if(window.scrollY>this.state.lastScrollPosition){
            this.setState({scrollingDown:true, lastScrollPosition:window.scrollY});
        }
        else{
            this.setState({scrollingDown:false, lastScrollPosition:window.scrollY});
        }
        console.log(this.state);
    }
   

    
      
    componentDidMount() {
        window.addEventListener('scroll', throttleFunction(this.handleScroll, 1000));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', throttleFunction(this.handleScroll, 1000));
    }
    render(){
        return <div className={`${styles.navbar} ${this.state.scrollingDown?styles.hide:styles.show}`}>{this.props.children}</div>;
    }
}

export default CollapsingNavBar;
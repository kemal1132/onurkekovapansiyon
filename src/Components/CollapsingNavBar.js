import React, { Component } from 'react';

class CollapsingNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {scrolling: false, lastScrollPosition:0}
        this.handleScroll=this.handleScroll.bind(this);
    }
 
    handleScroll(e){
        console.log(e);
    }
    throttle(fn, wait, e) {
        var time = Date.now();
        return function(e) {
          if ((time + wait - Date.now()) < 0) {
            fn(e);
            time = Date.now();
          }
        }
      }
      
    componentDidMount() {
        window.addEventListener('scroll', this.throttle(this.handleScroll, 1000));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.throttle(this.handleScroll, 1000));
    }
    render(){
        return <div>{this.props.children}</div>;
    }
}

export default CollapsingNavBar;
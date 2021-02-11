import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hasEror: false
        } 
    }

    componentDidCatch(error, info) {
        this.setState({hasEror: true})
    }
    render(){
        if (this.state.hasEror){
            return <h1>woopsi.... look like somethings wrong</h1>;
        }else{
            return this.props.children;
        }
    };
}
export default ErrorBoundry;
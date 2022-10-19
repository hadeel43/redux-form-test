import React, {
    Component
} from 'react';

export default class Message extends Component{
    render(){
        const {values}=this.props
        return(
            <div className="message">
             <p>Hi {values.name}, you are {values.age} years old.</p>
            </div>
        );
    }
}
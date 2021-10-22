import React, { Component } from 'react'

class Resume extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myResume':['FullStack Web Developer','Graphic Designer',]
        };
    }

    render() {
        return (
            <div className="condiv resume">
            <h1 className="subtopic">My Resume</h1>
            <ul>
            {this.state.myResume.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Resume
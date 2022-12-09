import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.input = React.createRef();
    }
    onSubmitEvent = (event) => {
        event.preventDefault();
        console.log(this.input.current.value)
    }
    render() {

        return (
            <form onSubmit={this.onSubmitEvent}>
                <label>
                    Name:
              <input
                        // defaultValue="Franc"
                        placeholder='Franc'
                        type="text"
                        ref={this.input} />
                </label>    
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TestComponent;
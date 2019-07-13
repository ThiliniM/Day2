import React, { Component } from "react";

class Composer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }
    onKeyup = (evt) => {
        this.setState({
            text: evt.target.value
        })

    }
    render() {
        const { onSubmit } = this.props;
        const { text } = this.state;
        console.log("text : ", text);
        return (
            (<div><textarea onKeyUp={this.onKeyup}></textarea>
                <button onClick={() => onSubmit(text)}>Send</button></div>)
        );
    }

}

export default Composer;
import React from "react";

class StatefullComponentExample extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            counts: 0,
            // list: [1, 2, 3, 4, 5],
            // str: 'some string in state',
            // obj: {
            //     key:'key1'
            // },
            // isShow: true
        };
        this.handleCkick = this.handleCkick.bind(this);
    }

    handleCkick() {
        this.setState({
            counts: this.state.counts + 1
        });
    }

    render() {
        return (
            <div>
                <h2>StatefullComponentExample</h2>

                <button onClick={this.handleCkick}>
                    Click me!
                </button>

                <h3>
                    Clicked: {this.state.counts}
                </h3>

                <p>
                    {this.state.str}
                </p>
            </div>
        )
    }
}

export default StatefullComponentExample;
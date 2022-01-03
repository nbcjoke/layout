import { Component } from "react";
import { CounterView } from "../components/CounterView";


export class CounterContainer extends Component {
    constructor() {
        super();

        this.state = {
            countValue: 0,
        };
    };

    handleIncrement = () => {
        this.setState((state) => ({ countValue: state.countValue + 1 }));
    };

    handleDecrement = () => {
        if (this.state.countValue > 0) {
            this.setState((state) => ({ countValue: state.countValue - 1 }));   
        };
    };

    handleReset = () => {
        this.setState({countValue: 0})
    }

    render() {
        return (
            <CounterView 
                handleDecrement={this.handleDecrement}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                countValue={this.state.countValue}
            />
        );
    }
}
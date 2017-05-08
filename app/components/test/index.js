import React, {Component} from 'react';

export default class StateDemo extends Component {

    constructor(props) {
        super(props);
        let t = this;
        t.state = {
            secondsElapsed:0
        }
    }

    tick(){
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }

    componentDidMount(){
        this.interval = setInterval( this.tick.bind(this), 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <div>目前已经计时：{this.state.secondsElapsed}秒</div>
        )
    }
}

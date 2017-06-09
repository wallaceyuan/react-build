import React, {Component} from 'react';
import Backbone from 'backbone'
import './index.css'

var Profile = Backbone.Model.extend({
    defaults : {
        name    : null,
        gender  : null,
        picture : null
    }
});

var profile = new Profile({
    name    : "Christopher Pitt",
    gender  : "male",
    picture : "http://placekitten.com/200/200"
});

console.log(
    "name    : " + profile.get("name") + "\n" +
    "gender  : " + profile.get("gender") + "\n" +
    "picture : " + profile.get("picture")
);

class StateDemo extends Component {

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
            <div className="card">
                <div className="picture">
                    <img src={this.props.profile.get("picture")} alt=""/>
                </div>
                <div className="name">
                    {this.props.profile.get("name")}
                    <small>
                        ({this.props.profile.get('gender')})
                    </small>
                </div>

                <div>目前已经计时：{this.state.secondsElapsed}秒</div>
            </div>
        )
    }
}

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StateDemo profile={profile} />
        )
    }
}
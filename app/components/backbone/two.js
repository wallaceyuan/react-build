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
            data:[],
            secondsElapsed:0
        }
    }

    tick(){
        //this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }

    forceUpdate(){
        this.setState({
            data:this.props.profile
        })
        console.log('profile',this.props.profile,'data',this.state.data)
    }

    componentWillMount(){
        profile.on("change", (function() {
            this.forceUpdate();
        }.bind(this)));
    }

    componentDidMount(){
        setTimeout(function () {
            profile.set("name", 'wallace');
            profile.set("gender", 'female');
        },2000)
        //this.interval = setInterval( this.tick.bind(this), 1000 );
    }

    componentWillUnmount(){
        //clearInterval(this.interval);
    }

    testChange(e){
        console.log('testChange',e.target.value)
        profile.set("gender", e.target.value);
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
                <input name="test" value={this.props.profile.get('gender')} onChange={this.testChange}/>
                <div>目前已经计时：{this.state.secondsElapsed}秒</div>
            </div>
        )
    }
}

export default class CardComponentTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StateDemo profile={profile} />
        )
    }
}



var connect = document.querySelector(".connect");
var target  = document.querySelector(".target");



var login = function() {
    FB.login(function() {
        fetchProfile();
    });
};

window.fbAsyncInit = function() {

    FB.init({
        appId  : "579585842125092",
        status : true,
        xfbml  : true
    });

    connect.addEventListener("click", function() {
        login();
    });

    FB.Event.subscribe(
        "auth.authResponseChange",
        function(response) {
            if (response.status === "connected") {
                fetchProfile();
            }
        }
    );

};


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));

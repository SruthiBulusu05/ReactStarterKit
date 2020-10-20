// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import home from './components/home/home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/layout/Navbar'
import flights from './components/flights/flights'
import CreatePassenger from './components/passenger/CreatePassenger'
import PassengerDetails from './components/passenger/PassengerDetails'
import { AuthenticationContext, AdalConfig, adalGetToken } from 'react-adal';

const CheckRole = Comp => class extends React.Component {
  componentWillMount() {
    // debugger;
    //localStorage.clear();
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var app_id = 'your-app-id';
    var consumer_key = 'your-consumer-key';
    var consumer_secret = 'your-consumer-secret';
    var concat = '&';
    var query = { 'location': 'sunnyvale,ca', 'format': 'json' };
    var oauth = {
      'oauth_consumer_key': consumer_key,
      'oauth_nonce': Math.random().toString(36).substring(2),
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
      'oauth_version': '1.0'
    };

    var merged = {};
    $.extend(merged, query, oauth);
    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function (k) {
      return [k + '=' + encodeURIComponent(merged[k])];
    });
    var signature_base_str = method
      + concat + encodeURIComponent(url)
      + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;
    var auth_header = 'OAuth ' + Object.keys(oauth).map(function (k) {
      return [k + '="' + oauth[k] + '"'];
    }).join(',');
    debugger;
    const getToken = localStorage.getItem('token');
    if (!getToken) {
      this.props.history.replace({ pathname: '/signin' });
    }


  }
  render() {
    return <Comp {...this.props} />;
  }
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'> <Redirect to='/home'></Redirect></Route>
            <Route path='/home' component={CheckRole(home)} />
            <Route path='/flights' component={CheckRole(flights)} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createPassenger' component={CheckRole(CreatePassenger)} />
            <Route path='/passengerDetails' component={CheckRole(PassengerDetails)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;

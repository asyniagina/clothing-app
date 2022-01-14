import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscrubeFromAuth = null;

  componentDidMount() {
  }

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //       });
    //     });
    //   }
      
      //setCurrentUser(userAuth);
      /*addCollectionAndDocuments(
        'collections', 
        collectionsArray.map(({ title, items }) => ({ title, items  }))
      ); */ //moving shop data to firebase
    //});
  


  componentWillUnmount() {
    this.unsubscrubeFromAuth();
  }
  
  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
  //collectionsArray: selectCollectionsForPreview //moving shop data to firebase
});

export default connect(mapStateToProps)(App);
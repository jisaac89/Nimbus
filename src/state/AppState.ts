import {observable, computed} from 'mobx';
import {browserHistory} from 'react-router';

import * as firebase from 'firebase';

import {inventoryState} from './_Store';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDe9t_4F_3GNmtaqoa6MNjgHnYNtM7yD2g",
    authDomain: "nimbus-a506b.firebaseapp.com",
    databaseURL: "https://nimbus-a506b.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "698814793446"
};

function checkForMobile() {
    return window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480;
}

export class AppState {
    
    @observable nightmode = false;
    @observable mobile = false;
    @observable menuEnabled = false;
    @observable signedIn = false;
    @observable notifications = [];

    constructor() {
        const self = this;
        self.mobile = checkForMobile();
    }

    initializeApp() {
      firebase.initializeApp(config);
      inventoryState.listenForInventory();
    }

    toggleNightMode() {
        this.nightmode = !this.nightmode;
    }
    
    gotoPage(page : string) {
        browserHistory.push(page);
    }

    toggleSignedIn() {
        this.signedIn = !this.signedIn;
    }

    toggleMenuEnabled() {
        this.menuEnabled = !this.menuEnabled;
    }

}

export const appState = new AppState();
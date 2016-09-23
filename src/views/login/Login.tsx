import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface P {
}

interface S {}

@observer
export default class Login extends React.Component<P,S>{
    toggleSignedIn() {
        appState.toggleSignedIn();
    }
    render() {        
        const self = this;
        return (
           <Open if={!appState.signedIn} className="text-center posrel z2">
                <Emerge enter="fadeIn">
                    <Toolbar block vertical spacing className="p20 w400px">
                        <img width={360} height={220} src={"https://cubexnimbus-dev.azurewebsites.net/Resources/img/BlueCloud.png"} className="mt50 w100 p10 mb20 floatL" />
                        <Input advanced block placeholder="USERNAME" />
                        <Input advanced block type="password" placeholder="PASSWORD" />
                        <Button block theme="primary" className="mb10" onClick={this.toggleSignedIn.bind(this)}>SIGN IN</Button>
                        <Button right simple>Forgot Password</Button>
                    </Toolbar>
                </Emerge>
            </Open>
        )
    }
}

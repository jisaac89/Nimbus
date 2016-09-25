import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import {Align, Button, Toolbar, Table, Checkbox, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface P {
    children: React.ReactChild
}

interface S {}

@observer
export default class Dashboard extends React.Component<P,S>{
    toggleNightMode() {
        appState.toggleNightMode();
    }
    gotoPage(page) {
        appState.gotoPage(page);
        appState.menuEnabled = false;
        if (page ===  'dashboard') {
            appState.menuEnabled = true;
        }
    }
    render() {
        const self = this;
        return (
            <Toolbar block spacing className="p10 ps20 pt100 text-center">
                <Emerge>
                    <Button size="xlarge" block onClick={this.gotoPage.bind(this, 'take') }>
                        TAKE
                    </Button>
                    <Button size="xlarge" block className="mt10">
                        STORE
                    </Button>
                    <Button size="xlarge" block className="mt10">
                        TEST CI
                    </Button>
                </Emerge>
            </Toolbar>
        )
    }
}
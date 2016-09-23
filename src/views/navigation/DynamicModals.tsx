import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Notifications, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

import InventoryModals from '../inventory/InventoryModals';

@observer
export default class DynamicModals extends React.Component<any, any>{
    render() {
        const {pathname} = this.props;

        return (
            <Layer fill>
                {pathname.pathname === 'inventory' ? <InventoryModals /> : null}
            </Layer>
        )
    }
}
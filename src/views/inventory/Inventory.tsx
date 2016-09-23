import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

import InventoryList from './InventoryList';
import InventoryCreate from './InventoryCreate';
import InventoryEdit from './InventoryEdit';

@observer
export default class Inventory extends React.Component<any,any>{
    componentDidMount() {
        appState.menuEnabled = false;
        let {slideIndex} = inventoryState;   
        slideIndex = 0;
    }
    render() {
        let {slideIndex} = inventoryState;
        
        if (inventoryState.inventory) {
            return (
                <Wizard slideIndex={slideIndex}>
                    <InventoryList open={slideIndex === 0} />
                    <InventoryCreate open={slideIndex === 1} />
                    <InventoryEdit open={slideIndex === 2} />
                </Wizard>
            )
        } else return null;
    }
}
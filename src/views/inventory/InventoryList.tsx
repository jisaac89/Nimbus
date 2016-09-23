import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

@observer
export default class InventoryList extends React.Component<any, any>{
    questionsSlideIndex(n) {
        inventoryState.slideIndex = n;
    }
    gotoEditItem(item) {
        inventoryState.slideIndex = 2;
        inventoryState.item = item;
    }
    removeItem(inventoryKey) {
        inventoryState.removeItem(inventoryKey);
    }
    menuTemplate(item) {
        return (
            <Toolbar flush noBorder>
                <Button size="small" onClick={this.gotoEditItem.bind(this, item)} icon="pencil" />
                <Button size="small" onClick={this.removeItem.bind(this, item.key)} icon="times" />
            </Toolbar>
        )
    }
    render() {
        const {menuTemplate, questionsSlideIndex} = this;
        const props = this.props;
        let {open} = props;
        
        let dataSource = inventoryState.inventory;
       
        let columns = [
            {name: 'Description1'},
            {title: 'menu', template: menuTemplate.bind(this), width: 100}
        ]
        
        return (
            <Open if={open}>
                <Toolbar noBorder block className="border-bottom border-top p10">
                    <Button icon="plus" theme="primary" onClick={questionsSlideIndex.bind(this, 1)}>Add Inventory</Button>
                </Toolbar>
                {dataSource.length > 0 ? 
                    <Table
                        columns={columns}
                        dataSource={dataSource.reverse()}
                /> : null}
            </Open>
        )
    }
}

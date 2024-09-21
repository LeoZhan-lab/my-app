import React from "react";
import MenuConfig from '../../config'
import * as Icon from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

//
const iconToElement = (name) => React.createElement(Icon[name])

//  
const items = MenuConfig.map((icon) => {

    //There are no submenus
    const child = {
        key: icon.path,
        icon: iconToElement(icon.icon),
        label: icon.label
    }
    //There are submenus
    if(icon.children){
        child.children = icon.children.map(item => {
            return{
                key: item.path,
                label: item.label
            }
        })
    }
    return child
})



const CommonAside = () => {
    return(
        <Sider trigger={null} collapsible >
                <h3 className="app-name">Management System </h3>
                {/* <div className="demo-logo-vertical" /> */}
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{
                        height: '100%'
                    }}
                />
            </Sider>
    )
}

export default  CommonAside;
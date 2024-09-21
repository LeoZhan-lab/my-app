import React from "react";
import { Button, Layout, Avatar, Dropdown} from 'antd';
import { MenuFoldOutlined } from "@ant-design/icons"
import "./index.css"
import { } from 'react-redux'

const { Header } = Layout;

const CommonHeader = ({collapsed}) => {

    const logout = ()=>{

    }

    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" >
              Personal
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={()=>logout} target="_blank" rel="noopener noreferrer" >
              Quit
            </a>
          ),
        }
      ];

    const setCollapsed = () => {

    }

    return(
        <Header className="header-container">     
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={}
            />

            <Dropdown
                menu={{items}}
            >
            <Avatar size={36} src={<img src={require("../../assets/images/header.jpg")}/> } />
            </Dropdown>
            
        </Header>
    )
}

export default CommonHeader
                
                

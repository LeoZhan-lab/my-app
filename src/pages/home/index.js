import React, {useEffect, useState } from "react";
import {Col, Row, Card, Table} from 'antd'
import './home.css'
import { getData } from "../../api";

const columns = [
    {
        title:'Name',
        dataIndex:'name'
    },
    {
        title:'TodayBuy',
        dataIndex:'todayBuy'
    },
    {
        title:'MonthBuy',
        dataIndex:'monthBuy'
    },
    {
        title:'TotalBuy',
        dataIndex:'totalBuy'
    }
]

//
const countData

const Home = () => {
    const userImg = require("../../assets/images/header.jpg")
    useEffect(()=>{
        getData().then(({data})=>{
            console.log(data, 'res')
            const {tableData} = data.data
            setTableData(tableData)
        })
    }, [])

    // Define table data
    const [tableData, setTableData] = useState([])
    // table column data
    

    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg} />
                        <div className="userinfo">
                            <p className="name">Admin</p>
                            <p className="access">Super User</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>Last login time:<span>2024-09-21</span></p>
                        <p>Last login location:<span>Japan</span></p>
                    </div>
                </Card>
                <Card>
                    <Table rowKey={'name'} columns={columns} dataSource={tableData} pagination={false} />
                </Card>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
}

export default Home;
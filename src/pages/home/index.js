import React, {useEffect } from "react";
import {Col, Row, Card} from 'antd'
import './home.css'
import { getData } from "../../api";

const Home = () => {
    const userImg = require("../../assets/images/header.jpg")
    useEffect(()=>{
        getData().then((res)=>{
            console.log(res, 'res')
        })
    }, [])

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
            </Col>
            <Col span={16}></Col>
        </Row>
    )
}

export default Home;
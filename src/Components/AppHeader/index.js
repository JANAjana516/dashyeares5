import {  MailOutlined } from "@ant-design/icons";
import { Badge,  Image,  Space, Typography } from "antd";
// import { useEffect, useState } from "react";

import i from '../../image/AT.png'
import { Link } from "react-router-dom";

function AppHeader() {


  // useEffect(() => {
  //   getComments().then((res) => {
  //     setComments(res.comments);
  //   });
  //   getOrders().then((res) => {
  //     setOrders(res.products);
  //   });
  // }, []);

  return (
    <div className="AppHeader">
      <Image
        width={80}
        style={{borderRadius:'20px' ,height:'65px'}}
        src={i}
      ></Image>
      <Typography.Title>AUTO TASKER</Typography.Title>
      <Space>
        <Badge  dot style={{marginRight:50}}>
         <Link to="/home/request"><MailOutlined
            style={{ fontSize: 24,
              marginRight:50
             }}
           
          />
          </Link> 
        </Badge>
        
      </Space>
     
    </div>
  );
}
export default AppHeader;

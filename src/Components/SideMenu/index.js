import {
  AppstoreOutlined,
  ShopOutlined,
  UserAddOutlined,
  UserOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Programs",
            icon: <AppstoreOutlined />,
            key: "/home/programfall",
          },
          {
            label: "Classrooms",
            key: "/home/creatclass",
            icon: <ShopOutlined />,
          },
          {
            label: "Profiles",
            key: "/home/fall",
            icon: <UserOutlined />,
          },
          {
            label: "Subjects",
            key: "/home/creatsubjects",
            icon: <ReadOutlined />,
          },
          {
            label: "Auto Profile",
            key: "/home/auto",
            icon: <UserAddOutlined />,
          },

          {
            label: "Input Mobile",
            key: "/M/one",
            icon: <UserAddOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;

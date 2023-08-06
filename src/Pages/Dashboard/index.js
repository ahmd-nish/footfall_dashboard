import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import SalesConversion from "./SalesConversion";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";

import { Row, Container, Col, CardBody, CardTitle, Card } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import VerticalComposedChart from "../AllCharts/rechart/VerticalComposedChart";
import { Sparklines, SparklinesBars } from "react-sparklines";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import Footfall from "./Footfall";
import Dwelltime from "./Dwelltime";

const Dashboard = () => {
  document.title = "Dashboard | Upzet - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Footfall Cam" breadcrumbItem="Dashboard" />
          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            <SalesConversion />
            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
            {/* Overview Chart */}
            <Footfall />
            <Dwelltime />
            {/* Social Source Chart */}
            <RevenueByLocation />
          </Row>

          <Row>
            {/* Order Stats */}
            {/* <OrderStatus /> */}
            {/* Notifications */}
            {/* <Notifications /> */}
            {/* Revenue by Location Vector Map */}

            <Col xl={8}>
              <Card >
                <CardBody>
                  <CardTitle>Daily average footfall</CardTitle>
                  <div id="sparkline2" className="text-center">
                 <ColumnWithDataLabels />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Rise in sales revenue
                  </CardTitle>
                  <VerticalComposedChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Latest Transaction Table */}
          <LatestTransation />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

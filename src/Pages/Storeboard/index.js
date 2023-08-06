import React, { useState } from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import SalesConversion from "./SalesConversion";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import {
  Row,
  Container,
  Col,
  CardBody,
  CardTitle,
  Card,
  Tooltip,
  CardSubtitle,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import VerticalComposedChart from "../AllCharts/rechart/VerticalComposedChart";
import { Sparklines, SparklinesBars } from "react-sparklines";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import Footfall from "./Footfall";
import Dwelltime from "./Dwelltime";
import {
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
} from "reactstrap";
import Composite from "./Composite";
import LineArea from "./LineArea";
import LineColumn from "./LineColumn";
import SocialSource2 from "./SocialSource2";
import LineArea2 from "./LineArea2";
import LineColumn2 from "./LineColumn2";
import MixBarChart from "../AllCharts/rechart/MixBarChart";

const Storeboard = () => {
  document.title = "Dashboard | Upzet - React Admin & Dashboard Template";

  const [ttop, setttop] = useState(false);
  const [tbottom, settbottom] = useState(false);
  const [tleft, settleft] = useState(false);
  const [tright, settright] = useState(false);
  const [thtml, setthtml] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Footfall Cam" breadcrumbItem="Store Dashboard" />
          <Row>
            <Col className="col-12 mb-4">
              <h4 className="my-3">Store overview</h4>
              <CardDeck className="card-deck-wrapper">
                <div className="card-group">
                  {/* First Card - Store Image */}
                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle
                        className="mt-0"
                        style={{ fontSize: "30px", fontWeight: "bold" }}
                      >
                        London Bridge
                      </CardTitle>
                    </CardBody>
                    <CardImg
                      top
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      style={{
                        borderRadius: "10px",
                        padding: "15px",
                        marginTop: "-20px",
                        height: "300px",
                      }}
                      alt="Store"
                    />
                  </Card>

                  {/* Second Card - Store Hours */}
                  <Card className="mb-4">
                    <CardBody style={{ padding: "15px" }}>
                      <CardTitle
                        className="mt-0"
                        style={{ fontSize: "25px" , fontWeight:'bold', padding: "20px" }}
                      >
                        Store Hours
                      </CardTitle>
                      <table
                        style={{
                          border: "none",
                          fontSize: "18px",
                          width: "100%",
                          textAlign: "start",
                        }}
                      >
                        <tr style={{ padding: "100px" }}>
                          <td style={{ fontWeight: "bold" }}>Day</td>
                          <td style={{ fontWeight: "bold" }}>Hours</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Mon:</td>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Tue:</td>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Wed:</td>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Thu:</td>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Fri:</td>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Sat:</td>
                          <td>10am - 4pm</td>
                        </tr>
                        <tr style={{ padding: "10px" }}>
                          <td>Sun:</td>
                          <td>Closed</td>
                        </tr>
                      </table>
                    </CardBody>
                  </Card>

                  {/* Third Card - Store Details and Map */}
                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle className="mt-0" style={{ fontSize: "25px" , fontWeight:'bold' }}>
                        Store Details
                      </CardTitle>
                      <CardText>
                        <b style={{ fontSize: "16px" }} id="TagTooltip">
                          Tags:
                        </b>
                        <CardBody>
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="btn btn-primary"
                              id="TooltipTop"
                            >
                              {" "}
                              Flagship Store
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              id="TooltipRight"
                            >
                              {" "}
                              Top performing
                            </button>
                            <button
                              type="button"
                              className="btn btn-info"
                              id="TooltipBottom"
                            >
                              {" "}
                              High footfall
                            </button>
                          </div>
                        </CardBody>
                        <br />
                        <b style={{ fontSize: "16px" }} id="AddressTooltip">
                          Address:
                        </b>
                        <br />
                        123 Store St, City, State, ZIP
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </CardDeck>
            </Col>
          </Row>

          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            {/* Social Source Chart */}
            <LineArea />
            <LineColumn />
            <SocialSource />

            
          </Row>

          <Row>
            {/* Overview Chart */}
            {/* Social Source Chart */}
            <LineArea2 />
            <LineColumn2 />
            <SocialSource2 />

            
          </Row>

  

          <Row>
            {/* Order Stats */}
            {/* <OrderStatus /> */}
            {/* Notifications */}
            {/* <Notifications /> */}
            {/* Revenue by Location Vector Map */}

            <Col xl={8}>
              <Card>
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
            <CardTitle className="mb-4" style={{marginTop:'5px', fontWeight:'bold'}}>Rise in sales revenue</CardTitle>
            <Row>
                <Col md={3} className="text-center">
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <p>10%</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <p>20%</p>
                </Col>
            
                <Col md={3} className="text-center">
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <p>30%</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <i className="ri-user-line align-middle" style={{fontSize: "1.6em"}}></i>
                    <p>40%</p>
                </Col>
            </Row>
            <h4 style={{marginTop:'5px', fontWeight:'bold'}}>Daily footfall by weather</h4>
            <MixBarChart />
        </CardBody>
    </Card>
</Col>

          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Storeboard;

import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";

const UserPanel = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} sm={6}>
          <Card style={{ alignContent: "center" }}>
            <CardBody>
              <div className="d-flex text-muted ">
              <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h6>Sales revenue</h6>
                  <h2 className="text-success">+6.0%</h2>
                  <h5 className="mb-0">$ 1,245</h5>
                  <p className="text-truncate mt-3 mb-0">
                    <span className="text-success me-2">
                      {" "}
                      0.02%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous month
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6>Sales conversion</h6>
                  <h2 className="text-success">+12.08%</h2>
                  <h5 className="mb-0">35.5%</h5>
                  <p className="text-truncate mb-0 mt-3">
                    <span className="text-success me-2">
                      {" "}
                      6.01%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-danger font-size-20">
                      <i className="ri-arrow-right-down-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6>Footfall</h6>
                  <h2 className="text-success">13.76%</h2>
                  <h5 className="mb-0">52.4K</h5>
                  <p className="text-truncate mb-0 mt-3">
                    <span className="text-danger me-2">
                      {" "}
                      0.01%{" "}
                      <i className="ri-arrow-right-down-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>


        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-danger font-size-20">
                      <i className="ri-arrow-right-down-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6>Average Dwell Time</h6>
                  <h2 className="text-danger">-2m:40s</h2>
                  <h5 className="mb-0">18m21s</h5>
                  <p className="text-truncate mb-0 mt-3">
                    <span className="text-danger me-2">
                      {" "}
                      0.91%{" "}
                      <i className="ri-arrow-right-down-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                      <i className="ri-group-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Avg. Dwell Time</p>
                  <h5 className="mb-3">435</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
                      {" "}
                      0.01%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
    </React.Fragment>
  );
};

export default UserPanel;

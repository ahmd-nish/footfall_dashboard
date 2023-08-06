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
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-success font-size-20">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6>Total Footfall</h6>
                  <h2 className="text-success">27.6K</h2>
                  <p className="text-truncate mb-0 mt-3">
    <span className="me-2">
      <i className="ri-star-line align-bottom ms-1"></i>  {/* <-- Star Icon */}
      Rank{" "}
      <i className="ri-arrow-up-line align-bottom ms-1"></i>  {/* <-- Up arrow Icon */}
    </span>
    123  {/* <-- Rank number */}
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
                    <div className="avatar-title bg-light rounded-circle text-success font-size-20">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h6>Average Dwell Time</h6>
                  <h2 className="text-success">16m:35s</h2>
                  <p className="text-truncate mb-0 mt-3">
    <span className="me-2">
      <i className="ri-star-line align-bottom ms-1"></i>  {/* <-- Star Icon */}
      Rank{" "}
      <i className="ri-arrow-up-line align-bottom ms-1"></i>  {/* <-- Up arrow Icon */}
    </span>
    53  {/* <-- Rank number */}
</p>

                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={3} sm={6}>
          <Card style={{ alignContent: "center" }}>
            <CardBody>
              <div className="d-flex text-muted ">
              <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-danger font-size-20">
                      <i className="ri-arrow-right-down-line"></i>
                    </div>
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h6>Total revenue</h6>
                  <h2 className="text-danger">256.8K</h2>
                  <p className="text-truncate mb-0 mt-3">
    <span className="me-2">
      <i className="ri-star-line align-bottom ms-1"></i>  {/* <-- Star Icon */}
      Rank{" "}
      <i className="ri-arrow-down-line text-danger align-bottom ms-1"></i>  {/* <-- Up arrow Icon */}
    </span>
    <span className="text-danger">13</span>  {/* <-- Rank number */}
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
                  <h2 className="text-success">+27.08%</h2>
                  <p className="text-truncate mb-0 mt-3">
    <span className="me-2">
      <i className="ri-star-line align-bottom ms-1"></i>  {/* <-- Star Icon */}
      Rank{" "}
      <i className="ri-arrow-up-line text-primary align-bottom ms-1"></i>  {/* <-- Up arrow Icon */}
    </span>
    <span className="text-primary">25</span>  {/* <-- Rank number */}
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

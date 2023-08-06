import React from "react";
import RadialChart from "./RadialChart";
import dountchart from "../AllCharts/apex/dountchart";


import { Card, CardBody, Col, Row } from "reactstrap";

import { SocialSourceData } from "../../CommonData/Data/index";
import RadialChart2 from "./RadialChart2";

const SocialSource2 = () => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex  align-items-center">
              <div className="flex-grow-1">
                <h4 className="card-title">Demographics Weekends</h4>
              </div>
              <div className="flex-shrink-0">
                <select className="form-select form-select-sm mb-0 my-n1">
                  {[
                    "May",
                    "April",
                    "March",
                    "February",
                    "January",
                    "December",
                  ].map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* RadialChart */}
            <RadialChart2 />
           
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default SocialSource2;

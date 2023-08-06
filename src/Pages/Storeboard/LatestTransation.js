import React from "react";

import { Row, Col } from "reactstrap";

import { LatestTransationData } from "../../CommonData/Data/index";

const LatestTransation = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Top 5 store summary</h4>

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead>
                    <tr>
                      {/* <th scope="col" style={{ width: "50px" }}>
                                                <div className="form-check">
                                                    <label className="form-check-label" htmlFor="customCheckall"></label>
                                                </div>
                                            </th> */}
                      <th scope="col" style={{ width: "60px" }}>
                        Store name
                      </th>
                      <th scope="col">Sales Revenue</th>
                      <th scope="col">vs. Preceding percentage</th>
                      <th scope="col">Sales conversion</th>
                      <th scope="col">vs. Preceding percentage</th>
                      <th scope="col">Footfall</th>
                      <th scope="col">vs. Preceding percentage</th>
                      <th scope="col">Avg. Dwell time</th>
                      <th scope="col">vs. Preceding percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LatestTransationData.map((item, key) => (
                      <tr key={key}>
                        <td>
                          <h5 className="font-size-15 mb-0">
                            {item.storeName}
                          </h5>
                        </td>
                        <td>$ {item.salesRevenue}</td>
                        <td
                          style={{
                            color: item.vsSalesRevenue >= 0 ? "green" : "red",
                          }}
                        >
                          {item.vsSalesRevenue} %
                        </td>
                        <td>{item.salesConversion}%</td>
                        <td
                          style={{
                            color:
                              item.vsSalesConversion >= 0 ? "green" : "red",
                          }}
                        >
                          {item.vsSalesConversion} %
                        </td>
                        <td>{item.footfall}</td>
                        <td
                          style={{
                            color: item.vsFootfall >= 0 ? "green" : "red",
                          }}
                        >
                          {item.vsFootfall} %
                        </td>
                        <td>{item.avgDwellTime}</td>
                        <td
                          style={{
                            color: item.vsAvgDwellTime >= 0 ? "green" : "red",
                          }}
                        >
                          {item.vsAvgDwellTime} %
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LatestTransation;

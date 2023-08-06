import React from 'react';
import LineColumnArea from './LineColumnArea';
import LineApexChart from "../AllCharts/apex/chartapex"
import Conversionchart from "../AllCharts/apex/chartconversion"
import Footfallchart from "../AllCharts/apex/chartfootfall"

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Row
} from "reactstrap";

import { OverViewData } from '../../CommonData/Data/index';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';


const Composite = () => {
    return (
        <React.Fragment>
            <Col xl={4} style={{height:'300px'}}>
              <Card>
                <CardBody>
                  <CardTitle>Composite Bar Chart</CardTitle>
                  <div id="sparkline5" className="text-center">
                    <Sparklines
                      data={[
                        9, 8, 7, 8, 6, 11, 5, 7, 9, 6, 4, 7, 11, 13, 9, 12,
                      ]}
                      limit={14}
                    >
                      <SparklinesBars
                        style={{
                          fill: "#3d8ef8",
                          width: "10px",
                          Spacing: "5px",
                          composite: true,
                        }}
                      />
                      <SparklinesLine
                        style={{
                          stroke: "#11c46e",
                          fill: "rgba(17, 196, 110)",
                        }}
                      />
                    </Sparklines>
                  </div>
                </CardBody>
              </Card>
            </Col>
        </React.Fragment>
    );
};

export default Composite;
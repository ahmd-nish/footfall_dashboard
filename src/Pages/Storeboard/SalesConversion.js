import React from 'react';
import LineColumnArea from './LineColumnArea';
import LineApexChart from "../AllCharts/apex/chartapex"
import Conversionchart from "../AllCharts/apex/chartconversion"

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";



const SalesConversion = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="card-title">Sales Conversion ($)</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <div>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1">
                                        ALL
                                    </button>
                                    <button type="button" className="btn btn-soft-primary btn-sm me-1">
                                        1M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1">
                                        6M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1 active">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Conversionchart />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SalesConversion;
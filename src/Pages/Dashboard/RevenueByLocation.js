import React from 'react';
import Vector from "./MapVector";
import {
    Card,
    CardBody,
    Col,
} from "reactstrap";

import { Link } from 'react-router-dom';


const RevenueByLocation = () => {
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card>
                    <CardBody>
                        <h5 className="card-title mb-3">Sales Revenue by store</h5>

                        <div style={{ height: "320px" }}>
                            <Vector
                                value="us_aea"
                                color="rgb(212, 218, 221)"
                                height="300px"
                            />
                        </div>

                        <div className="text-center mt-4">
                            <Link to="/#" className="btn btn-primary btn-sm">View More</Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RevenueByLocation;
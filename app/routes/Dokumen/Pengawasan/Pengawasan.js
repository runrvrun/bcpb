import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    FormFeedback,
    Badge,
    CustomInput,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from '../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Pengawasan = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Dokumen Pengawasan"
                className="mb-5 mt-4"
            />

        </Container>
    </React.Fragment>
);

export default Pengawasan;
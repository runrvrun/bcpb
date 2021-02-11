import React from 'react';
import { Link } from "react-router-dom";

import { 
    Container,
    Button,
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
            <Link to='/dokumen/pengawasan/add'>
            <Button color='primary'>Buat Dokumen</Button>
            </Link>
            <Link to='/dokumen/pengawasan/print/6015960fc78a392049bd90ed'>
            <Button color='primary'>Cetak Dokumen</Button>
            </Link>
        </Container>
    </React.Fragment>
);

export default Pengawasan;
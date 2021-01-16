import React from 'react';
import { chain, reduce } from 'lodash';
import fetch from 'node-fetch';
import axios from 'axios';

import {
    Container,
    Card,
    CardFooter,
    CardHeader,
    Input,
    InputGroup,
    Form,
    FormGroup,
    Label, 
    Col,
} from '../../../components';
import {
    AgGridReact,
    AgGridColumn,
} from '../../../components/agGrid';
import {
    HeaderMain,
} from '../../components/HeaderMain';
import colors from '../../../colors';

/*
    Custom Renderers
*/
const nomor_barangRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nomor_barang }
    </span>
`;
const jenis_ajuRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.jenis_aju }
    </span>
`;
const nama_pemberitahuRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nama_pemberitahu }
    </span>
`;
const nama_penerimaRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nama_penerima }
    </span>
`;
const alamat_penerimaRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.alamat_penerima }
    </span>
`;
const tanggal_hawbRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.tanggal_hawb }
    </span>
`;
const current_statusRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.current_status }
    </span>
`;
const nama_pdttRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nama_pdtt }
    </span>
`;
const cif_awalRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.cif_awal }
    </span>
`;
const cif_akhirRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.cif_akhir }
    </span>
`;
const fob_awalRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.fob_awal }
    </span>
`;
const fob_akhirRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.fob_akhir }
    </span>
`;
const kode_billingRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.kode_billing }
    </span>
`;

export default class Cn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: [],
            visibleCount: 0,
            quickFilterValue: ''
        };

        this.gridApi = null;

        this.onGridReady = this.onGridReady.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.onQuickFilterChange = this.onQuickFilterChange.bind(this);
    }

    componentDidMount() {
        var token = sessionStorage.getItem('token');
        const options = { headers: { Authorization: `Bearer ${token}` } };
        axios.get("http://localhost:8080/cn", options)
            .then(res => {
                    this.setState({ rowData: res.data });
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.gridApi) {
            if (this.state.quickFilterValue !== prevState.quickFilterValue) {
                this.gridApi.setQuickFilter(this.state.quickFilterValue);
            }
        }
    }

    onModelUpdated() {
        if (this.gridApi) {
            const model = this.gridApi.getModel();
            const visibleCount = model.getRowCount();

            this.setState({ visibleCount });
        }
    }

    onGridReady({ api }) {
        this.gridApi = api;
    }

    onQuickFilterChange(e) {
        this.setState({ quickFilterValue: e.target.value });
    }

    render() {
        const { rowData, visibleCount, quickFilterValue } = this.state;

        return (
            <Container>
                <HeaderMain 
                    title="Cn"
                    className="mb-5 mt-4"
                />
                <Form>
                    <FormGroup row>
                        <Label for="fileInput" sm={1}>Upload</Label>
                        <Col sm={11}>
                            <Input type="file" name="file" id="fileInput" />
                        </Col>
                    </FormGroup>
                </Form>
                <Card>
                    <CardHeader tag="h6" className="d-flex justify-content-between align-items-center bg-white bb-0">
                        <span>AgGrid Example</span>
                        <div className="d-flex align-items-center">
                            <span className="mr-3 text-nowrap small">
                                { visibleCount } / { rowData.length }
                            </span>

                            <InputGroup size="sm">
                                <Input
                                    type="text"
                                    placeholder="Type text to filter..."
                                    value={ quickFilterValue }
                                    onChange={ this.onQuickFilterChange }
                                />
                            </InputGroup>
                        </div>
                    </CardHeader>
                    <div className="ag-theme-bootstrap" style={{ height: '600px' }}>
                        <AgGridReact
                            rowData={ rowData }
                            rowSelection="multiple"
                            onGridReady={ this.onGridReady }
                            onModelUpdated={ this.onModelUpdated }
                            defaultColDef={{
                                sortable: true,
                                resizable: true,
                                filter: true,
                            }}
                        >
                            <AgGridColumn
                                headerName=""
                                width={ 70 }
                                checkboxSelection
                                suppressMenu
                            />
                                <AgGridColumn
                                    headerName="Nomor Barang"
                                    field="nomor_barang"
                                    width={ 150 }
                                    cellRenderer={ nomor_barangRenderer }
                                />
                                <AgGridColumn
                                    headerName="Jenis Aju"
                                    field="jenis_aju"
                                    width={ 150 }
                                    cellRenderer={ jenis_ajuRenderer }
                                />
                                <AgGridColumn
                                    headerName="Nama Pemberitahu"
                                    field="nama_pemberitahu"
                                    width={ 150 }
                                    cellRenderer={ nama_pemberitahuRenderer }
                                />
                                <AgGridColumn
                                    headerName="Nama Penerima"
                                    field="nama_penerima"
                                    width={ 150 }
                                    cellRenderer={ nama_penerimaRenderer }
                                />
                                <AgGridColumn
                                    headerName="Alamat Penerima"
                                    field="alamat_penerima"
                                    width={ 150 }
                                    cellRenderer={ alamat_penerimaRenderer }
                                />
                                <AgGridColumn
                                    headerName="Tanggal HAWB"
                                    field="tanggal_hawb"
                                    width={ 150 }
                                    cellRenderer={ tanggal_hawbRenderer }
                                />
                                <AgGridColumn
                                    headerName="Current Status"
                                    field="current_status"
                                    width={ 150 }
                                    cellRenderer={ current_statusRenderer }
                                />
                                <AgGridColumn
                                    headerName="Nama PDTT"
                                    field="nama_pdtt"
                                    width={ 150 }
                                    cellRenderer={ nama_pdttRenderer }
                                />
                                <AgGridColumn
                                    headerName="CIF Awal"
                                    field="cif_awal"
                                    width={ 150 }
                                    cellRenderer={ cif_awalRenderer }
                                />
                                <AgGridColumn
                                    headerName="CIF Akhir"
                                    field="cif_akhir"
                                    width={ 150 }
                                    cellRenderer={ cif_akhirRenderer }
                                />
                                <AgGridColumn
                                    headerName="FOB Awal"
                                    field="fob_awal"
                                    width={ 150 }
                                    cellRenderer={ fob_awalRenderer }
                                />
                                <AgGridColumn
                                    headerName="FOB Akhir"
                                    field="fob_akhir"
                                    width={ 150 }
                                    cellRenderer={ fob_akhirRenderer }
                                />
                                <AgGridColumn
                                    headerName="Kode Billing"
                                    field="kode_billing"
                                    width={ 150 }
                                    cellRenderer={ kode_billingRenderer }
                                />
                                
                        </AgGridReact>
                    </div>
                    <CardFooter className="bg-white text-center">
                        More examples of this table can be found <a href="https://www.ag-grid.com" target="_blank" rel="noopener noreferrer">Here</a>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}

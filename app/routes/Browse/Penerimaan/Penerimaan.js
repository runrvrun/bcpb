import React from 'react';
import { chain, reduce } from 'lodash';
import fetch from 'node-fetch';
import axios from 'axios';

import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    Button,
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
const kd_ktr1Renderer = ({ data }) => `
        <span class="text-inverse">
            ${ data.kd_ktr1 }
        </span>
    `;
const nmktr1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nmktr1 }
    </span>
`;
const jns_ddp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.jns_ddp1 }
    </span>
`;
const no_ddp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.no_ddp1 }
    </span>
`;
const tgl_ddp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.tgl_ddp1 }
    </span>
`;
const wb1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.wb1 }
    </span>
`;
const jns_dbp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.jns_dbp1 }
    </span>
`;
const no_dbp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.no_dbp1 }
    </span>
`;
const tgl_dbp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.tgl_dbp1 }
    </span>
`;
const ntb_ntp1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.ntb_ntp1 }
    </span>
`;
const ntpn1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.ntpn1 }
    </span>
`;
const tgl_ntpn1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.tgl_ntpn1 }
    </span>
`;
const akun1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.akun1 }
    </span>
`;
const nilai1Renderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.nilai1 }
    </span>
`;
const ppnRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.ppn }
    </span>
`;
const pphRenderer = ({ data }) => `
    <span class="text-inverse">
        ${ data.pph }
    </span>
`;


export default class Penerimaan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: [],
            visibleCount: 0,
            quickFilterValue: '',
            selectedFile: null
        };

        this.gridApi = null;

        this.onGridReady = this.onGridReady.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.onQuickFilterChange = this.onQuickFilterChange.bind(this);
    }

    componentDidMount() {        
        var token = sessionStorage.getItem('token');
        const options = { headers: { Authorization: `Bearer ${token}` } };
        axios.get("http://localhost:8080/penerimaan", options)
            .then(res => {
                    this.setState({ rowData: res.data });
            })
            .catch(err => console.log(err));
            // .then(res => res.json())
            // .then(fetchedData => {
            //     this.setState({ rowData: fetchedData });
            // });
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

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] }); 
        console.log("File selected: " + event.target.files[0].name); 
    }; 

    onFileUpload = () => { 
        const formData = new FormData(); 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
        console.log(this.state.selectedFile); 
        console.log("Uploading file to server");
        var token = sessionStorage.getItem('token');
        const options = { headers: { Authorization: `Bearer ${token}` } };
        axios.post("http://localhost:8080/penerimaan/upload", formData, options); 
      }; 

    render() {
        const { rowData, visibleCount, quickFilterValue } = this.state;

        return (
            <Container>
                <div>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                        title="Penerimaan"
                            className="mt-0"
                        />
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup className="align-self-start mr-2">
                                <Form>
                                    <FormGroup row>
                                        <Col sm={12}>
                                            <Input type="file" name="file" id="fileInput" onChange={this.onFileChange} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start">
                                <Button color="primary" className="mb-2 mr-2 px-3" onClick={this.onFileUpload}>
                                    Upload
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                
                <Card>
                    <CardHeader tag="h6" className="d-flex justify-content-between align-items-center bg-white bb-0">
                        <span>Penerimaan</span>
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
                    <div className="ag-theme-bootstrap" style={{ height: '500px' }}>
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
                                    headerName="Kode Kantor"
                                    field="kd_ktr1"
                                    width={ 150 }
                                    cellRenderer={ kd_ktr1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Nama Kantor"
                                    field="nmktr1"
                                    width={ 150 }
                                    cellRenderer={ nmktr1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Jenis DDP"
                                    field="jns_ddp1"
                                    width={ 150 }
                                    cellRenderer={ jns_ddp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Nomor DDP"
                                    field="no_ddp1"
                                    width={ 150 }
                                    cellRenderer={ no_ddp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Tgl. DDP"
                                    field="tgl_ddp1"
                                    width={ 150 }
                                    cellRenderer={ tgl_ddp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Wajib Bayar"
                                    field="wb1"
                                    width={ 150 }
                                    cellRenderer={ wb1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Jenis DBP"
                                    field="jns_dbp1"
                                    width={ 150 }
                                    cellRenderer={ jns_dbp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Nomor DBP"
                                    field="no_dbp1"
                                    width={ 150 }
                                    cellRenderer={ no_dbp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Tgl. DBP"
                                    field="tgl_dbp1"
                                    width={ 150 }
                                    cellRenderer={ tgl_dbp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="NTB / NTP"
                                    field="ntb_ntp1"
                                    width={ 150 }
                                    cellRenderer={ ntb_ntp1Renderer }
                                />
                                <AgGridColumn
                                    headerName="NTPN"
                                    field="ntpn1"
                                    width={ 150 }
                                    cellRenderer={ ntpn1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Tgl. NTPN"
                                    field="tgl_ntpn1"
                                    width={ 150 }
                                    cellRenderer={ tgl_ntpn1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Akun"
                                    field="akun1"
                                    width={ 150 }
                                    cellRenderer={ akun1Renderer }
                                />
                                <AgGridColumn
                                    headerName="Nilai"
                                    field="nilai1"
                                    width={ 150 }
                                    cellRenderer={ nilai1Renderer }
                                />
                                <AgGridColumn
                                    headerName="PPN"
                                    field="ppn"
                                    width={ 150 }
                                    cellRenderer={ ppnRenderer }
                                />
                                <AgGridColumn
                                    headerName="PPH"
                                    field="pph"
                                    width={ 150 }
                                    cellRenderer={ pphRenderer }
                                />
                        </AgGridReact>
                    </div>
                </Card>
            </Container>
        );
    }
}

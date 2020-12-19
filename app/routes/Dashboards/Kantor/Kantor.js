import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FloatGrid as Grid,
    Card,
    Media,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    CardFooter,
    Button,
    CardHeader
} from '../../../components';
import { applyColumn } from '../../../components/FloatGrid';

import { HeaderMain } from "../../components/HeaderMain";

import {
    MetricVsTarget
} from "../../components/Analytics/MetricVsTarget";
import {
    WebsitePerformance
} from "../../components/Analytics/WebsitePerformance";
import {
    AudienceMetricsChart
} from "./components/AudienceMetricsChart";
import {
    TinyAreaChart
} from "../../components/Analytics/TinyAreaChart";
import {
    SimpleLineChart
} from "../../Graphs/ReCharts/components/SimpleLineChart";

import classes from './Kantor.scss';

const LAYOUT = {
    'kantor1': { md: 6, h: 6 },
    'kantor2': { md: 6, h: 6 },
}

const SessionByDevice = (props) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);
SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
}

export class Kantor extends React.Component {
    state = {
        layouts: _.clone(LAYOUT)
    }

    _resetLayout = () => {
        this.setState({
            layouts: _.clone(LAYOUT)
        })
    }

    render() {
        const { layouts } = this.state;

        return (
            <React.Fragment>
                <Container fluid={ false }>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                            title="Kantor"
                            className="mt-0"
                        />
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-globe text-body mr-2"></i>
                                        Jakarta<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Pilih kantor:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Jakarta
                                        </DropdownItem>
                                        <DropdownItem>
                                            Semarang
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <i className="fa fa-fw fa-plus mr-2"></i>
                                            Add New
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        Bulan lalu<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                        Pilih periode:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            3 bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            6 bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tahun lalu
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Lainnya...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        Bulan lalu<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                        Pilih periode:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            3 bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            6 bulan lalu
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tahun lalu
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Lainnya...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start">
                                <Button color="primary" className="mb-2 mr-2 px-3">
                                    Apply
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button
                                    color="link"
                                    className="mb-2 text-decoration-none align-self-start"
                                    onClick={this._resetLayout}
                                >
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Container>

                <Grid>
                    <Grid.Row
                        onLayoutChange={ layouts => this.setState({ layouts }) }
                        columnSizes={ this.state.layouts }
                        rowHeight={ 55 }
                    >
                        <Grid.Col { ...(applyColumn('kantor1', layouts)) }>
                            <Card className="d-flex flex-column">
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Traffic Channels
                                </CardHeader>
                                <Table responsive className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0">Channel</th>
                                            <th scope="col" className="bt-0">Sessions</th>
                                            <th scope="col" className="bt-0">Prev Period</th>
                                            <th scope="col" className="text-right bt-0">Change</th>
                                            <th scope="col" className="bt-0 text-right">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Organic Search
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Direct
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">157.11</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                82,1% 
                                                <i className="fa fa-caret-up text-success ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Social Media
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('kantor2', layouts)) }>
                            <Card className="d-flex flex-column">
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Traffic Channels
                                </CardHeader>
                                <Table responsive className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bt-0">Channel</th>
                                            <th scope="col" className="bt-0">Sessions</th>
                                            <th scope="col" className="bt-0">Prev Period</th>
                                            <th scope="col" className="text-right bt-0">Change</th>
                                            <th scope="col" className="bt-0 text-right">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Organic Search
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Direct
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">157.11</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                82,1% 
                                                <i className="fa fa-caret-up text-success ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-inverse">
                                                Social Media
                                            </td>
                                            <td className="align-middle">
                                                { faker.finance.amount() }
                                            </td>
                                            <td className="align-middle">
                                                <span data-faker="[[finance.amount]]">949.00</span>
                                            </td>
                                            <td className="align-middle text-right">
                                                -75,0% 
                                                <i className="fa fa-caret-down text-danger ml-1"></i>
                                            </td>
                                            <td className="text-right align-middle">
                                                <TinyAreaChart />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}

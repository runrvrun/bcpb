import React from 'react';
import faker from 'faker/locale/en_US';
import PropTypes from 'prop-types';

import { 
    Media,
    CustomInput,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../../components';

import { randomArray } from './../../../../utilities';

const TrTableUsersList = (props) => {

    return (
        <React.Fragment>
            <tr>
             <td className="align-middle">
                <CustomInput type="checkbox" id={`TrTableUsersList-${ props.id }` } label="" inline />
             </td>
             <td className="align-middle">
                <a href="#">
                    <i className="fa fa-fw fa-star-o"></i>
                </a>
             </td>
                <td>
                    <Media>
                        <Media left className="d-flex align-self-center mr-3">
                            
                        </Media>
                        <Media body>
                            <a className="mt-0 d-flex text-decoration-none" href="#">
                                { faker.name.firstName() } { faker.name.lastName() }
                            </a>
                            <span>
                                { faker.name.jobTitle() }
                            </span>
                        </Media>
                    </Media>
                </td>
                <td className="align-middle">
                     { faker.internet.email() }   
                </td>
                <td className="align-middle">
                     { faker.phone.phoneNumberFormat() }   
                </td>
                <td className="align-middle text-right">
                    <UncontrolledButtonDropdown>
                        <DropdownToggle color="link" className="pr-0">
                            <i className="fa fa-bars"></i><i className="fa fa-angle-down ml-2" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <i className="fa fa-fw fa-phone mr-2"></i>
                                Call
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-comment mr-2"></i>
                                Chat
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-video-camera mr-2"></i>
                                Video
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-user mr-2"></i>
                                Profile
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-pencil mr-2"></i>
                                Edit
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <i className="fa fa-fw fa-trash mr-2"></i>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </td>
            </tr>
        </React.Fragment>
    )
}
TrTableUsersList.propTypes = {
    id: PropTypes.node
};
TrTableUsersList.defaultProps = {
    id: "1"
};

export { TrTableUsersList };

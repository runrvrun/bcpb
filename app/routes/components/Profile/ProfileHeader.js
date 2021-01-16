import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';

import { 
    Badge,
    Media,
} from './../../../components';

const ProfileHeader = () => (
    <React.Fragment>
        { /* START Header */}
        <Media className="mb-3">
            <Media body>
                <h5 className="mb-1 mt-0">
                    <Link to="/apps/profile-details">
                        { faker.name.firstName() } { faker.name.lastName() }
                    </Link> <span className="text-muted mx-1"> / </span> Profile Edit
                </h5>
                <Badge color="primary" pill className="mr-2">Premium</Badge> 
                <span className="text-muted">Edit Your Name</span>
            </Media>
        </Media>
        { /* END Header */}
    </React.Fragment>
)

export { ProfileHeader };

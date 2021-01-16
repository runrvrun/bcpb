import React from 'react';
import faker from 'faker/locale/en_US';

import { 
} from './../../components';

import { randomArray } from './../../utilities';

const Profile = () => { 

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center my-3">
                
            </div>
            <div className="mb-4 text-center">
                <a className="h6 text-decoration-none" href="#">
                    { faker.name.firstName() } { faker.name.lastName() }
                </a>
                <div className="text-center mt-2">
                    { faker.name.jobTitle() }
                </div>
                <div className="text-center">
                    <i className="fa fa-map-marker mr-1"></i>
                    { faker.address.city() }
                </div>
            </div>
        </React.Fragment>
    )
}

export { Profile };

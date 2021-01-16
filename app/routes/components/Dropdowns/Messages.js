import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Media
} from './../../../components';
import { randomArray } from './../../../utilities';

const status = [
    "success",
    "danger",
    "warning",
    "secondary"
];

const Messages = () => (
    <React.Fragment>
        <Media>
            <Media left className="mr-4">
            </Media>
            <Media body className="text-left">
                <span className="d-flex justify-content-start">
                    <span className="h6 pb-0 mb-0 d-flex align-items-center">
                        { faker.name.firstName() } { faker.name.lastName() }
                    </span>
                    
                    <span className="ml-1 small">(23)</span>
                    <span className="ml-auto small">Now</span>
                </span>
                <p className="mt-2 mb-1">
                    { faker.lorem.sentences() }
                </p>
                <span className="small">
                    { faker.date.past().toString() }
                </span>
            </Media>
        </Media>
    </React.Fragment>

)

export { Messages };

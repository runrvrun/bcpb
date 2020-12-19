import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. 
		Designed and implemented by{' '}
		<a
			href="http://www.arfianagus.com"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			dijit.lab
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2021"
};

export { FooterText };

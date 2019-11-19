import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC = () => {
	return (
		<Dimmer active>
			<Loader size='large' />
		</Dimmer>
	);
};

export default LoadingComponent;

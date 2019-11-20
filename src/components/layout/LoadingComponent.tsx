import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Iprops {
	activeDimmer: boolean;
	inverted: boolean;
	text?: string;
}

const LoadingComponent: React.FC<Iprops> = ({ activeDimmer, text, inverted }) => {
	return (
		<Dimmer active={activeDimmer} inverted={inverted}>
			<Loader size='large'>{text}</Loader>
		</Dimmer>
	);
};

export default LoadingComponent;

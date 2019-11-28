import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

const TextInput: React.FC<IProps> = ({ input, width, type, placeholder, meta: { touched, error } }) => {
	return (
		<Form.Field error={touched && !!error} type={type} width={width}>
			{touched &&
			error && (
				<Label basic color='red' pointing='below'>
					{error}
				</Label>
			)}
			<input {...input} placeholder={placeholder} />
		</Form.Field>
	);
};

export default TextInput;

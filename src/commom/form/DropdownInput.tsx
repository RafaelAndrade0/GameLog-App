import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label, Dropdown } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

const DropdownInput: React.FC<IProps> = ({ input, width, options, placeholder, meta: { touched, error } }) => {
	return (
		<Form.Field error={touched && !!error} width={width}>
			<Dropdown
				onChange={(e, data) => input.onChange(data.value)}
				placeholder={placeholder}
				options={options}
				multiple
				selection
				search
				clearable
			/>
			{touched &&
			error && (
				<Label basic color='red'>
					{error}
				</Label>
			)}
		</Form.Field>
	);
};

export default DropdownInput;

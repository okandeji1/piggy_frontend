import React from 'react';
import { Input } from 'antd';
import styled from '@emotion/styled';

const AppInput = (props) => {
	const { children, ...rest } = props;
	return (
		<InputStyled
			className="block w-full h-14 px-4 py-3 mb-3 leading-tight text-grey-700 bg-white r-1 appearance-none focus:outline-none focus:bg-white "
			{...rest}
		>
			{children}
		</InputStyled>
	);
};

const InputStyled = styled(Input)`
	::before {
		border-style: none;
	}
	.r-1 {
		border-radius: 5px;
	}
`;
export default AppInput;

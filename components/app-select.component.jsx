import React from 'react';
import { Select } from 'antd';
import styled from '@emotion/styled';

const AppSelect = (props) => {
	const { children, ...rest } = props;
	return <SelectStyled {...rest}>{children}</SelectStyled>;
};

const SelectStyled = styled(Select)`
	.ant-select-selector {
		display: block !important;
		appearance: none !important;
		width: 100% !important;
		height: 3.5rem !important;
		display: block !important;
		margin-bottom: 0.75rem !important;
		padding: 0.75rem 1rem !important;
		--bg-opacity: 1;
		--text-opacity: 1;
		color: rgba(74, 85, 104, var(--text-opacity)) !important;
		line-height: 1.25rem !important;
		border-width: 1px !important;
		padding: 0.75rem 1rem !important;
		margin-bottom: 0.75rem !important;
	}

	.ant-select-selection-placeholder {
		margin: auto !important;
	}

	.ant-select-selector:focus {
		outline: 0;
		--bg-opacity: 1;
		background-color: #fff !important;
		background-color: rgba(255, 255, 255, var(--bg-opacity));
	}
	.ant-select-arrow {
		top: 47% !important;
	}
	.ant-select-selection-item {
		line-height: 20px !important;
		margin: auto !important;
	}
`;
export default AppSelect;

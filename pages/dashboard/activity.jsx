import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Layout, Collapse, Typography } from 'antd';
import DashboardLayout from '../../container/layout/dashboard.container';

const { Content } = Layout;
const { Panel } = Collapse;

const Test = () => {
	return (
		<DashboardLayout>
			<PageStyled>
				<Typography.Title level={4}>Activity</Typography.Title>
				<Collapse defaultActiveKey={['1']}>
					<Panel header="Dividend received" key="1">
						<p>A dog is a type of domesticated animal.</p>
					</Panel>
					<Panel header="Dividend received" key="2">
						<p> Known for its loyalty and faithfulness,</p>
					</Panel>
					<Panel header="Dividend received" key="3">
						<p> it can be found as a welcome guest in many households across the world.</p>
					</Panel>
				</Collapse>
				,
			</PageStyled>
		</DashboardLayout>
	);
};

const PageStyled = styled(Layout)`
	background: ${(props) => props.theme.colors.tertiary};
	width: 100vh;
	height: 100vh;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
		width: 100%;
	}
`;
export default Test;

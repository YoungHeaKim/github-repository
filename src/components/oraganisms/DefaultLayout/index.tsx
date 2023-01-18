import React, { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../../molecules';

interface DefaultLayoutProps {
	className?: string;
	headerTitle: string;
}

const GlobalStyleOverride = createGlobalStyle`
  #root {
    height: 100%;
    min-width: 1280px;
  }
`;

const DefaultLayoutContainer = styled.div<{ isOverflowHidden: boolean }>`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;

	& > default-aside {
		flex-shrink: 0;
	}

	& > .content-area {
		flex: 1;
		display: flex;
		overflow: ${({ isOverflowHidden }) =>
			isOverflowHidden ? 'hidden' : 'auto'};

		& > main {
			flex: 1;
			overflow: ${({ isOverflowHidden }) =>
				isOverflowHidden ? 'hidden' : 'auto'};
		}
	}
`;

function DefaultLayout({
	className,
	children,
	headerTitle,
}: PropsWithChildren<DefaultLayoutProps>) {
	return (
		<>
			<GlobalStyleOverride />
			<DefaultLayoutContainer isOverflowHidden={false} className={className}>
				<Header pageName={headerTitle} />
				<div className="content-area">
					<main>{children}</main>
				</div>
			</DefaultLayoutContainer>
		</>
	);
}

DefaultLayout.defaultProps = {
	className: undefined,
};

export default DefaultLayout;

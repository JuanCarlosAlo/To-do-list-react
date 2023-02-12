import styled from 'styled-components';

const HeaderStyle = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 370px;
	background-image: url(/images/bg-desktop-light.jpg);
	background-size: cover;
	margin-bottom: 1rem;
`;

const HeaderTopStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 540px;
`;

const MainContainerStyle = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 540px;
`;

const TaskStyled = styled.div`
	width: 100%;
`;

const FilterStyle = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 1rem;
	border: 2px solid gray;
`;

export {
	HeaderStyle,
	HeaderTopStyle,
	MainContainerStyle,
	TaskStyled,
	FilterStyle
};

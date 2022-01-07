import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 4px;

	input {
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 100%;
		height: 36px;
		padding: 8px;
		font-weight: 500;
	}

	button {
		background-color: #225ed8;
		padding: 8px 16px;
		margin: 0 16px;
		border: none;
		border-radius: 8px;

		&:hover {
			background-color: #2c5282;
			box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
		}
		span {
			font-wight: bold;
			font-weight: bold;
			color: #fff;
		}
	}
`;

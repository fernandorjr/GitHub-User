import React from "react";

import * as S from "./styled";
const Repositoryitem = ({ name, linkToRepo, fullName }) => {
	return (
		<S.Wrapper>
			<S.WrapperTitle>{name}</S.WrapperTitle>
			<S.WrapperFullName>Link Repositório: </S.WrapperFullName>
			<S.WrapperLink href={linkToRepo} target="_blanc" rel="noreferrer">
				{fullName}
			</S.WrapperLink>
		</S.Wrapper>
	);
};

export default Repositoryitem;

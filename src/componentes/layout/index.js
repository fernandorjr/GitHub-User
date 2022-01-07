import React from "react";
import Header from "../header";

import * as S from "./styled";

const index = ({ children }) => {
	return (
		<S.WrapperLayout>
			<Header />
			{children}
		</S.WrapperLayout>
	);
};

export default index;

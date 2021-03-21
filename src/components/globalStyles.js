import { createGlobalStyle } from "styled-components";

import "@fontsource/open-sans";
import "@fontsource/montserrat/700.css";

const GlobalStyles = createGlobalStyle`
	:root{
		--primary:#d32f2f;
		--primary-light:#ff6659;
		--primary-dark:#9a0007;
		--secondary:#0eff1f;
		--secondary-light:#72ff60;
		--secondary-dark:#00ca00;
		--red: #ff3535;
		--black: #3E3D3D;
		--yellow: #ffC500;
		--grey: #efefef;
		--grey-dark: #666666;
		--barColor: #333333;
		--background-color: #cccccc;
		--bodyFont:'Open Sans', sans-serif;
		--titleFont:'Montserrat',sans-serif;
	}


	html{
		font-size:12px;
		font-family: 'Open Sans', sans-serif;
		font-weight:400;
		font-style:normal;

	}
	img{
		max-width:100%;
	}
	h1,h2, h3,h4{
		font-family: 'Montserrat',sans-serif;
	}
	
	ul, li, p {
		font-family: 'Open Sans', sans-serif;
	}
`;
export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'antd/dist/antd.min.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: local('Pretendard Variable'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2') format('woff2-variations');
    }

    html {
        font-family: Pretendard Variable, sans-serif
    }

    .ag-root-wrapper {
        font-family: Pretendard Variable, sans-serif !important
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;

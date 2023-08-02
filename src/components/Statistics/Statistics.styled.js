import styled from 'styled-components';

export const Section = styled.section`
     width: 264px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;

    h2 {
        padding: 20px 0;
    }

    .stat-list {
        display: flex;
        flex-wrap: wrap;
        
    }

    .item {
        width: 33.33%;
        box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
        padding: 5px 0;
        span {
            display: block;
        }
    }
`;


import styled from 'styled-components';


export const Container = styled.div`
    width: 264px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
    
    

   img {
    border-radius: 50%;
    width: 100px;
    margin: auto;
    
   }

   .name {
    font-weight: 600;
    font-size: 18px;
    margin-top: 20px;
   }

   .location, .tag {
        color: #8e8f99;
        margin-top: 10px;
    }

    .description {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
`;


export const StatList = styled.ul`
background-color: #f4f4fd;

display: flex;
justify-content: space-evenly;

li{
    padding: 15px;
    width: 33%;
}

li:nth-child(2) {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}

li span {
    display: block;
}
`;
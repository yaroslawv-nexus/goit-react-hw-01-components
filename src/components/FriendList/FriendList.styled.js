import styled from 'styled-components';

export const List = styled.ul`


    width: 264px;
    background-color: white;
    

.item {
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
    padding: 10px 10px;
    
}

/* .item:not(:last-child) {
    margin-left: 20px;
} */
.avatar{
margin-left: 20px;
}

.name {
    margin-left: 20px;
    font-size: 30px;
}

.offline, .online {
   display: block;
   border-radius: 50%;
   
   width: 10px;
   height: 10px;
}

.offline {
    background-color: red;
}

.online {
    background-color: green;
}

`;
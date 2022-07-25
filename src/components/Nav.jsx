import React from "react";
import {GiKnifeFork} from "react-icons/gi";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Nav () {
    return (
        <>
            <NavBar>

                <Logo to ={'/'}>
                    <GiKnifeFork/>
                    Delicious app
                </Logo>
                <Links to={'/favourites'}>List</Links>
            </NavBar>
        </>
    )

}

const Links = styled(Link)`
text-decoration:none;
padding: 1rem 2rem;
color:#313131;
background: white;
border:2px solid black;
margin-right: 2rem;
font-weight:600;
justify-content:flex-end;

:hover{
    background: linear-gradient(35deg,#494949, #313131);
    color:white;
}

`
const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;
`
const NavBar = styled.div`
padding:4rem 0rem;
display:flex;
justify-content: space-between;
align-items:center;

svg{
  font-size:2rem;
}`

export default Nav
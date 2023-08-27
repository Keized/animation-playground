import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Navigation () {
    return <Header >
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/landscape-carousel'}>Landscape Carousel</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    </Header>
}


const Header = styled.button`
    position: absolute;
    display: flex;
    width: 100%;
    left: 0;
    top: 0;
    display: none;
`
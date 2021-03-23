import {Styles} from './styles';
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <Styles>
            {/* <img src={Logo} alt="Ide"></img> */}
            <h2>
                <Link to="/">
                        Identoolfier
                </Link>
            </h2>
        
        </Styles>

    )
}

export default Header;
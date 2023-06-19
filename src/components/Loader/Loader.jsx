import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Circles
            height="80"
            width="80"
            radius="9"
            color='#1976d2'
            ariaLabel='three-dots-loading'
            wrapperStyle={{ justifyContent: 'center', alignItems: 'center'}}
            wrapperClass="true"           
        />
        
    )
}

export default Loader;
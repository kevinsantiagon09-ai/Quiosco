import { useContext } from 'react';
import QuioscoContext from '../context/Quioscoprovider';

const useQuiosco = () => {
    return useContext(QuioscoContext);
}

export default useQuiosco

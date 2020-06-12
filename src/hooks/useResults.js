import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMEssage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Puerto Rico'
                }
            });

            setResults(response.data.businesses);
        } catch (e) {
            setErrorMEssage('Oops, something went wrong :(');
        }
    };

    // call search api when rendered
    // searchApi('Wendys'); WRONG loops undefined!
    useEffect(() => {
        searchApi('hamburger');

    }, []);

    return [searchApi, results, errorMessage];
};
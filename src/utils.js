import { globalHistory } from '@reach/router';
import { pathPrefix } from '../gatsby-config';

const getTruePath = () => globalHistory.location.pathname.replace(pathPrefix, '');
const unslugify = word => word
    .split('-')
    .map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(' ');


const isMobile = () => typeof window !== 'undefined' ?
    navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) : false;

export {
    getTruePath,
    unslugify,
    isMobile
}

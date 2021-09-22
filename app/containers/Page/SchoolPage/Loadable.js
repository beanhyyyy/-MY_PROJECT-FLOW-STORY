/**
 * Asynchronously loads the component for HOME PAGE
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

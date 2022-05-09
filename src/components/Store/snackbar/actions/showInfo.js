import { fireShow } from './show.js';
import { STATUS_INFO } from '../consts.js';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireShowInfo = (id) => async (text = '', timeout = -1) => fireShow(id)(STATUS_INFO, text, timeout);

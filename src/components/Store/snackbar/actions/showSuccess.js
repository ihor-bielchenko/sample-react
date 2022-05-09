import { fireShow } from './show.js';
import { STATUS_SUCCESS } from '../consts.js';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireShowSuccess = (id) => async (text = '', timeout = -1) => fireShow(id)(STATUS_SUCCESS, text, timeout);

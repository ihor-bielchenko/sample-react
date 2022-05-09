import { fireShow } from './show.js';
import { STATUS_ERROR } from '../consts.js';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireShowError = (id) => async (text = '', timeout = -1) => fireShow(id)(STATUS_ERROR, text, timeout);

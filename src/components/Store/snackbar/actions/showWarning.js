import { fireShow } from './show.js';
import { STATUS_WARNING } from '../consts.js';

/**
 * @param {number|string} id - Snackbar ID
 * @return {Function}
 */
export const fireShowWarning = (id) => async (text = '', timeout = -1) => fireShow(id)(STATUS_WARNING, text, timeout);

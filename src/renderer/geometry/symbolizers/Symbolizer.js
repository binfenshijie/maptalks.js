import { isString, colorProperties } from '../../../core/util';

/**
 * @classdesc
 * Base class for all the symbolilzers
 * @class
 * @extends Class
 * @abstract
 * @private
 */
class Symbolizer {
    getMap() {
        return this.geometry.getMap();
    }

    getPainter() {
        return this.painter;
    }

    /**
     * Test if the property is a property related with coloring
     * @param {String} prop - property name to test
     * @static
     * @function
     * @return {Boolean}
     * @memberof symbolizer.Symbolizer
     */
    static testColor(prop) {
        if (!prop || !isString(prop)) {
            return false;
        }
        if (colorProperties.indexOf(prop) >= 0) {
            return true;
        }
        return false;
    }
}

export default Symbolizer;

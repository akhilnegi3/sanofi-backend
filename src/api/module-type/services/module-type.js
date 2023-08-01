'use strict';

/**
 * module-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::module-type.module-type');

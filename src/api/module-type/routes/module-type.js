'use strict';

/**
 * module-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::module-type.module-type');

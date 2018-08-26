'use strict';

const iso3166_data = require('./iso3166Data');

// assign default to USA country first

module.exports = function getISO3166(country) {
	if (country.length === 0) {
		return iso3166_data[0];
	}

	else {
		return iso3166_data.find(iso3166_datum => country === iso3166_datum.country_code) || {};
	}
};

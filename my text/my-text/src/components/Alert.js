// src/components/Alert.js
import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}: </strong>{alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object
};

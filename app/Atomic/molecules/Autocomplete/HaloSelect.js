import React from 'react';
import PropTypes from 'prop-types';
import AtomAutocomplete from '../../atoms/Autocomplete';
import AtomTextField from '../../atoms/TextField';

const sampleData = [
  { label: 'Option 1', value: 0 },
  { label: 'Option 2', value: 1 }
];

/* select sử dụng autocomplete */
export default function HaloSelect(props) {
  const { options, label, textFieldProps, AutocompleteProps } = props;
  return (
    <AtomAutocomplete
      options={options}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <AtomTextField
          {...params}
          fullWidth
          label={label}
          {...textFieldProps}
        />
      )}
      {...AutocompleteProps}
    />
  );
}
HaloSelect.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  textFieldProps: PropTypes.object,
  AutocompleteProps: PropTypes.object
};
HaloSelect.defaultProps = {
  options: sampleData
};

export default [
    {
        key: 'validateOn',
        label: 'ABC Validate On',
        weight: 0,
        ignore: true
    },
    {
        key: 'custom-validation-js',
        title: 'ABC Custom Validation',
        type: 'hidden',
        ignore: true
    },
    {
        weight: 110,
        key: 'validate.minLength',
        label: 'Minimum Length',
        placeholder: 'Minimum Length',
        type: 'hidden',
        tooltip: 'The minimum length requirement this field must meet.',
        ignore: true
    },
    {
        weight: 120,
        key: 'validate.maxLength',
        label: 'Maximum Length',
        placeholder: 'Maximum Length',
        type: 'hidden',
        tooltip: 'The maximum length requirement this field must meet.',
        ignore: true
    },

];
import baseTextFieldForm from 'formiojs/components/textfield/TextField.form';
import FirstNameEditDisplay from './editForm/FirstName.edit.display';
import FirstNameEditValidation from './editForm/FirstName.edit.validation';
export default function (...extend) {
  return baseTextFieldForm([
    {
      key: 'validation',
      label: 'First Name With Validation',
      components: FirstNameEditValidation
    },
    {
      key: 'display',
      label: 'Custom Display Tab',
      components: FirstNameEditDisplay
    }
  ], ...extend);
}

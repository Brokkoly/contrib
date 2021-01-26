import baseTextFieldForm from 'formiojs/components/textfield/TextField.form';
import LastNameEditValidation from './editForm/LastName.edit.validation';
export default function(...extend) {
  return baseTextFieldForm([
    {
      key: 'validation',
      label: 'Last Name With Validation',
      components: LastNameEditValidation
    }
  ], ...extend);
}

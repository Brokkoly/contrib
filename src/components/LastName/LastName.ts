/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
import FormioUtils from 'formiojs/utils';
import { validateLastName } from '../../validators';
const TextFieldComponent = Components.components.textfield;
import editForm from './LastName.form';

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class LastName extends TextFieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }

  init() {
    this.component.validate.custom = 
    this.originalComponent.validate.custom = 
    validateLastName.toString()+';\r\nvalid=validateLastName(input);';
    this.component.validate.minLength = this.originalComponent.validate.minLength = 2;
    this.component.validate.maxLength = this.originalComponent.validate.maxLength = 100;
    return super.init();
  }


  static schema() {
    return TextFieldComponent.schema({
      type: 'lastname',
    });
  }

  public static editForm = editForm;

  static get builderInfo() {
    return {
      title: 'Last Name',
      group: 'basic',
      icon: 'fa fa-terminal',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#table',
      schema: LastName.schema()
    };
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }
}

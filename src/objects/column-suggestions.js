/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ColumnSuggestions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ColumnSuggestions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      explanations: 'explanations',
      format: 'format',
      objective: 'objective',
      optimization_goals: 'optimization_goals',
      id: 'id'
    });
  }

  get (fields, params): ColumnSuggestions {
    return this.read(
      fields,
      params
    );
  }
}

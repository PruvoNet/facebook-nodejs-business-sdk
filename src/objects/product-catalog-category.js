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
 * ProductCatalogCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogCategory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      criteria_value: 'criteria_value',
      description: 'description',
      destination_uri: 'destination_uri',
      image_url: 'image_url',
      name: 'name',
      num_items: 'num_items',
      tokens: 'tokens',
      id: 'id'
    });
  }

  static get CategorizationCriteria (): Object {
    return Object.freeze({
      brand: 'BRAND',
      category: 'CATEGORY',
      product_type: 'PRODUCT_TYPE'
    });
  }

  get (fields, params): ProductCatalogCategory {
    return this.read(
      fields,
      params
    );
  }
}

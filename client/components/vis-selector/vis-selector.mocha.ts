'use strict';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { setupDOM } from '../../utils/jsdom-setup';
import * as React from 'react/addons';
var { TestUtils } = React.addons;
var { Simulate } = TestUtils;

import { $, Expression } from 'plywood';
import { VisSelector } from './vis-selector';

describe('VisSelector', () => {
  setupDOM();

  it('adds the correct class', () => {
    var renderedComponent = TestUtils.renderIntoDocument(
      JSX(`
        <VisSelector/>
      `)
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((<any>React.findDOMNode(renderedComponent)).className, 'should contain class').to.contain('vis-selector');
  });

});

/*!
 * VisualEditor InternalListNode class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * ContentEditable internal list node.
 *
 * @class
 * @extends ve.ce.BranchNode
 * @constructor
 * @param {ve.dm.InternalListNode} model Model to observe
 * @param {Object} [config] Config options
 */
ve.ce.InternalListNode = function VeCeInternalListNode( model, config ) {
	// Parent constructor
	ve.ce.BranchNode.call( this, model, config );

	// TODO: render nothing
	this.$.hide();
};

/* Inheritance */

ve.inheritClass( ve.ce.InternalListNode, ve.ce.BranchNode );

/* Static Properties */

ve.ce.InternalListNode.static.name = 'internalList';

ve.ce.InternalListNode.static.tagName = 'span';

/* Methods */

/**
 * Deliberately empty: don't build an entire CE tree with DOM elements for things that won't render
 * @inheritdoc
 */
ve.ce.InternalListNode.prototype.onSplice = function () {
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.InternalListNode );

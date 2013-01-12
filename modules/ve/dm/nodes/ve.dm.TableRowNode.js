/*!
 * VisualEditor DataModel TableRowNode class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * DataModel table row node.
 *
 * @class
 * @extends ve.dm.BranchNode
 * @constructor
 * @param {ve.dm.BranchNode[]} [children] Child nodes to attach
 * @param {Object} [element] Reference to element in linear model
 */
ve.dm.TableRowNode = function VeDmTableRowNode( children, element ) {
	// Parent constructor
	ve.dm.BranchNode.call( this, 'tableRow', children, element );
};

/* Inheritance */

ve.inheritClass( ve.dm.TableRowNode, ve.dm.BranchNode );

/* Static Properties */

ve.dm.TableRowNode.static.name = 'tableRow';

ve.dm.TableRowNode.static.childNodeTypes = [ 'tableCell' ];

ve.dm.TableRowNode.static.parentNodeTypes = [ 'tableSection' ];

ve.dm.TableRowNode.static.matchTagNames = [ 'tr' ];

ve.dm.TableRowNode.static.toDataElement = function () {
	return { 'type': 'tableRow' };
};

ve.dm.TableRowNode.static.toDomElement = function () {
	return document.createElement( 'tr' );
};

/* Registration */

ve.dm.nodeFactory.register( 'tableRow', ve.dm.TableRowNode );
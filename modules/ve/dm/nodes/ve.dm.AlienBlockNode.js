/**
 * VisualEditor data model AlienBlockNode class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * DataModel node for an alien block node.
 *
 * @class
 * @constructor
 * @extends {ve.dm.LeafNode}
 * @param {Number} [length] Length of content data in document
 * @param {Object} [attributes] Reference to map of attribute key/value pairs
 * @param {Object} [internal] Reference to internal data object
 */
ve.dm.AlienBlockNode = function ve_dm_AlienBlockNode( length, attributes, internal ) {
	// Parent constructor
	ve.dm.LeafNode.call( this, 'alienBlock', 0, attributes, internal );
};

/* Inheritance */

ve.inheritClass( ve.dm.AlienBlockNode, ve.dm.LeafNode );

/* Static Members */

/**
 * Node rules.
 *
 * @see ve.dm.NodeFactory
 * @static
 * @member
 */
ve.dm.AlienBlockNode.rules = {
	'isWrapped': true,
	'isContent': false,
	'canContainContent': false,
	'childNodeTypes': [],
	'parentNodeTypes': null
};

// This is a special node, no converter registration is required
ve.dm.AlienBlockNode.converters = null;

/* Registration */

ve.dm.nodeFactory.register( 'alienBlock', ve.dm.AlienBlockNode );

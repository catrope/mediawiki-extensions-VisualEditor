/**
 * VisualEditor data model ListNode class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * DataModel node for a list.
 *
 * @class
 * @constructor
 * @extends {ve.dm.BranchNode}
 * @param {ve.dm.BranchNode[]} [children] Child nodes to attach
 * @param {Object} [attributes] Reference to map of attribute key/value pairs
 * @param {Object} [internal] Reference to internal data object
 */
ve.dm.ListNode = function ve_dm_ListNode( children, attributes, internal ) {
	// Parent constructor
	ve.dm.BranchNode.call( this, 'list', children, attributes, internal );
};

/* Inheritance */

ve.inheritClass( ve.dm.ListNode, ve.dm.BranchNode );

/* Static Members */

/**
 * Node rules.
 *
 * @see ve.dm.NodeFactory
 * @static
 * @member
 */
ve.dm.ListNode.rules = {
	'isWrapped': true,
	'isContent': false,
	'canContainContent': false,
	'childNodeTypes': ['listItem'],
	'parentNodeTypes': null
};

/**
 * Node converters.
 *
 * @see {ve.dm.Converter}
 * @static
 * @member
 */
ve.dm.ListNode.converters = {
	'domElementTypes': ['ul', 'ol'],
	'toDomElement': function ( type, element ) {
		return element.attributes && ( {
			'bullet': document.createElement( 'ul' ),
			'number': document.createElement( 'ol' )
		} )[element.attributes.style];
	},
	'toDataElement': function ( tag, element ) {
		return ( {
			'ul': { 'type': 'list', 'attributes': { 'style': 'bullet' } },
			'ol': { 'type': 'list', 'attributes': { 'style': 'number' } }
		} )[tag];
	}
};

/* Registration */

ve.dm.nodeFactory.register( 'list', ve.dm.ListNode );

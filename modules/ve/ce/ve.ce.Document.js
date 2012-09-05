/**
 * VisualEditor content editable Document class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * ContentEditable document.
 *
 * @class
 * @extends {ve.Document}
 * @constructor
 * @param model {ve.dm.Document} Model to observe
 */
ve.ce.Document = function ve_ce_Document( model, surface ) {
	// Parent constructor
	ve.Document.call( this, new ve.ce.DocumentNode( model.getDocumentNode(), surface ) );

	// Properties
	this.model = model;
};

/* Inheritance */

ve.inheritClass( ve.ce.Document, ve.Document );

/* Methods */

ve.ce.Document.prototype.getNodeFromOffset = function ( offset ) {
	var node = this.documentNode.getNodeFromOffset( offset );
	if ( !node.canHaveChildren() ) {
		node = node.getParent();
	}
	return node;
};

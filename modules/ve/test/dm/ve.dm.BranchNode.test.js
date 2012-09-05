/**
 * VisualEditor data model BranchNode tests.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

QUnit.module( 've.dm.BranchNode' );

/* Stubs */

ve.dm.BranchNodeStub = function ve_dm_BranchNodeStub( children, attributes ) {
	// Parent constructor
	ve.dm.BranchNode.call( this, 'branch-stub', children, attributes );
};

ve.inheritClass( ve.dm.BranchNodeStub, ve.dm.BranchNode );

ve.dm.BranchNodeStub.rules = {
	'isWrapped': true,
	'isContent': false,
	'canContainContent': false,
	'childNodeTypes': null
};

ve.dm.BranchNodeStub.converters = null;

ve.dm.nodeFactory.register( 'branch-stub', ve.dm.BranchNodeStub );

/* Tests */

QUnit.test( 'canHaveChildren', 1, function ( assert ) {
	var node = new ve.dm.BranchNodeStub();
	assert.equal( node.canHaveChildren(), true );
} );

QUnit.test( 'canHaveGrandchildren', 1, function ( assert ) {
	var node = new ve.dm.BranchNodeStub();
	assert.equal( node.canHaveGrandchildren(), true );
} );

QUnit.test( 'setRoot', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub( [node1] ),
		node3 = new ve.dm.BranchNodeStub( [node2] ),
		node4 = new ve.dm.BranchNodeStub();
	node3.setRoot( node4 );
	assert.strictEqual( node3.getRoot(), node4 );
	assert.strictEqual( node2.getRoot(), node4 );
	assert.strictEqual( node1.getRoot(), node4 );
} );

QUnit.test( 'setDocument', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub( [node1] ),
		node3 = new ve.dm.BranchNodeStub( [node2] ),
		node4 = new ve.dm.BranchNodeStub();
	node3.setDocument( node4 );
	assert.strictEqual( node3.getDocument(), node4 );
	assert.strictEqual( node2.getDocument(), node4 );
	assert.strictEqual( node1.getDocument(), node4 );
} );

QUnit.test( 'push', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub( [node1] );
	node3.on( 'splice', function () {
		// Will be called 1 time
		assert.ok( true, 'splice was emitted' );
	} );
	assert.strictEqual( node3.push( node2 ), 2 );
	assert.deepEqual( node3.getChildren(), [node1, node2] );
} );

QUnit.test( 'pop', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub( [node1, node2] );
	node3.on( 'splice', function () {
		// Will be called 1 time
		assert.ok( true, 'splice was emitted' );
	} );
	assert.strictEqual( node3.pop(), node2 );
	assert.deepEqual( node3.getChildren(), [node1] );
} );

QUnit.test( 'unshift', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub( [node1] );
	node3.on( 'splice', function () {
		// Will be called 1 time
		assert.ok( true, 'splice was emitted' );
	} );
	assert.strictEqual( node3.unshift( node2 ), 2 );
	assert.deepEqual( node3.getChildren(), [node2, node1] );
} );

QUnit.test( 'shift', 3, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub( [node1, node2] );
	node3.on( 'splice', function () {
		// Will be called 1 time
		assert.ok( true, 'splice was emitted' );
	} );
	assert.strictEqual( node3.shift(), node1 );
	assert.deepEqual( node3.getChildren(), [node2] );
} );

QUnit.test( 'splice', 9, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub(),
		node4 = new ve.dm.BranchNodeStub( [node1, node2] );
	node4.on( 'splice', function () {
		// Will be called 3 times
		assert.ok( true, 'splice was emitted' );
	} );
	// Insert branch
	assert.deepEqual( node4.splice( 1, 0, node3 ), [] );
	assert.deepEqual( node4.getChildren(), [node1, node3, node2] );
	// Remove branch
	assert.deepEqual( node4.splice( 1, 1 ), [node3] );
	assert.deepEqual( node4.getChildren(), [node1, node2] );
	// Remove branch and insert branch
	assert.deepEqual( node4.splice( 1, 1, node3 ), [node2] );
	assert.deepEqual( node4.getChildren(), [node1, node3] );
} );

QUnit.test( 'getOffsetFromNode', 4, function ( assert ) {
	var node1 = new ve.dm.BranchNodeStub(),
		node2 = new ve.dm.BranchNodeStub(),
		node3 = new ve.dm.BranchNodeStub( [node1, node2] ),
		node4 = new ve.dm.BranchNodeStub( [node3] );
	assert.strictEqual( node4.getOffsetFromNode( node1 ), 1 );
	assert.strictEqual( node4.getOffsetFromNode( node2 ), 3 );
	assert.strictEqual( node4.getOffsetFromNode( node3 ), 0 );
	assert.strictEqual( node4.getOffsetFromNode( node4 ), 0 );
} );

import { UniformsGroup } from './UniformsGroup.js';

/**
 * @author robertlong / https://github.com/robertlong
 */



class RawUniformsGroup extends UniformsGroup {
    constructor(data) {
        super();
        this.data = data;
        this.autoUpdate = true;
	    this.needsUpdate = false;
        this.isRawUniformsGroup = true;
    }

    add(uniform) {
        console.warn( 'THREE.RawUniformsGroup: .add() is unimplemented. Modify .data manually instead.' );

		return this;
    }

    remove(uniform) {
        console.warn( 'THREE.RawUniformsGroup: .remove() is unimplemented. Modify .data manually instead.' );

		return this;
    }

    copy(source) {
        super.copy(this);

		this.autoUpdate = source.autoUpdate;
		this.data = source.data.slice( 0 );

		return this;
    }
}

// function RawUniformsGroup( data ) {

// 	UniformsGroup.call( this );

// 	this.data = data;
// 	this.autoUpdate = true;
// 	this.needsUpdate = false;

// }

// RawUniformsGroup.prototype = Object.assign( Object.create( UniformsGroup.prototype ), {

// 	constructor: RawUniformsGroup,

// 	isRawUniformsGroup: true,

// 	add: function ( _uniform ) {

// 		console.warn( 'THREE.RawUniformsGroup: .add() is unimplemented. Modify .data manually instead.' );

// 		return this;

// 	},

// 	remove: function ( _uniform ) {

// 		console.warn( 'THREE.RawUniformsGroup: .remove() is unimplemented. Modify .data manually instead.' );

// 		return this;

// 	},

// 	copy: function ( source ) {

// 		UniformsGroup.prototype.copy.call( this );

// 		this.autoUpdate = source.autoUpdate;
// 		this.data = source.data.slice( 0 );

// 		return this;

// 	}

// } );


export { RawUniformsGroup };
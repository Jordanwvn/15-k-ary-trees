'use strict';

const htmlTree = require('../index.js');
const Tree = require('../lib/tree.js');

let expected = {"root":{"element":"html","content":"","children":[{"element":"head","content":"","children":[{"element":"title","content":"minimal html to tree","children":[]}]},{"element":"body","content":"","children":[{"element":"header","content":"","children":[{"element":"h2","content":"We're building a tree!","children":[]},{"element":"nav","content":"","children":[{"element":"ul","content":"","children":[{"element":"li","content":"home","children":[]},{"element":"li","content":"about","children":[]},{"element":"li","content":"contact","children":[]},{"element":"li","content":"signin","children":[]}]}]}]},{"element":"main","content":"","children":[{"element":"section","content":"","children":[{"element":"p","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ad consequuntur dolor quis laboriosam animi expedita, recusandae, illo? Omnis reiciendis veritatis iure debitis eos provident accusantium est molestiae commodi corrupti.","children":[]},{"element":"p","content":"Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","children":[]}]}]},{"element":"footer","content":"","children":[{"element":"p","content":"&copy; Codefellows LLC 2017","children":[]}]}]}]}}


describe('TURN HTML INTO OBJECT TREE', () => {
  it('should return null if the file is not html', () => {
    expect( htmlTree.create('minimal.js') ).toEqual(null)
  })
  it('should return a tree', () => {
    expect( htmlTree.create('minimal.html') ).toBeInstanceOf(Tree);
  })
  it('should have "html" as the root', () => {
    expect( htmlTree.create('minimal.html').root.element ).toEqual('html');
  })
  it('should return the expected tree', () => {
    expect( htmlTree.create('minimal.html') ).toEqual(expected);
  })
})

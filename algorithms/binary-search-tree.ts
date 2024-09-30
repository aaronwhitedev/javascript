class TreeNode {
	public data: number;
	public left: TreeNode | null;
	public right: TreeNode | null;

	constructor(data: number) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	public head: TreeNode | null;
	constructor(head?: TreeNode) {
		this.head = head || null;
	}

	public insert(node: TreeNode | null = this.head, value: number): TreeNode {
		if (node === null) {
			const root = new TreeNode(value);
			return root;
		} else {
			if (value < node.data) {
				node.left = this.insert(node.left, value);
			} else {
				node.right = this.insert(node.right, value);
			}
			return node;
		}
	}

	public search(node: TreeNode | null = this.head, value: number): TreeNode | null {
		let temp = node;
		if (temp === null) {
			return null;
		} else if (temp.data === value) {
			return temp;
		} else {
			if (value < temp.data) {
				return this.search(temp.left, value);
			} else {
				return this.search(temp.right, value);
			}
		}
	}

	public inorderTraversal(root: TreeNode | null = this.head): void {
		let temp = root;
		if (temp !== null) {
			this.inorderTraversal(temp.left);
			console.log(temp.data);
			this.inorderTraversal(temp.right);
		}
	}

	public preorderTraversal(root: TreeNode | null = this.head): void {
		let temp = root;
		if (temp !== null) {
			console.log(temp.data);
			this.inorderTraversal(temp.left);
			this.inorderTraversal(temp.right);
		}
	}

	public postorderTraversal(root: TreeNode | null = this.head): void {
		let temp = root;
		if (temp !== null) {
			this.inorderTraversal(temp.left);
			this.inorderTraversal(temp.right);
			console.log(temp.data);
		}
	}
}

const rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const BSTree = new BinarySearchTree(rootNode);
BSTree.insert(BSTree.head, 30);
BSTree.insert(BSTree.head, 20);
BSTree.insert(BSTree.head, 40);
BSTree.insert(BSTree.head, 70);
BSTree.insert(BSTree.head, 60);
BSTree.insert(BSTree.head, 80);

// BSTree.inorderTraversal();
// BSTree.postorderTraversal();
console.log(BSTree.search(BSTree.head, 70));
console.log(BSTree.search(BSTree.head, 72));

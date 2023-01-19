// Helper function to insert a node at the correct position in the children array of its parent
const insertNodeInParent = (node, parent) => {
    if (node.previousSiblingId === null) {
        parent.children.unshift(node);
    } else {
        const index = parent.children.findIndex(
            (child) => child.nodeId === node.previousSiblingId
        );
        parent.children.splice(index + 1, 0, node);
    }
};
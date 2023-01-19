// This function is responsible for inserting a node at the correct position in the children array of its parent
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

const buildTree = nodes => {
    // Create a map of all nodes using their nodeId as the key
    const nodeMap = new Map()
    nodes.forEach(node => nodeMap.set(node.nodeId, node))

    //This performs the iteration thhrough the map and constructs thhe tree
    const rootNodes = []
    nodeMap.forEach((node) => {
        if (node.parentId) {
            const parent = nodeMap.get(node.parentId);
            if (!parent.children) {
                parent.children = [];
            }
            insertNodeInParent(node, parent);
        } else {
            rootNodes.push(node);
        }
    });

    return rootNodes;
}
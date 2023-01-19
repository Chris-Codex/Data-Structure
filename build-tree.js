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

//An array to collect list of Input values to perform the sorting
const _input = [
    {
        nodeId: "4",
        name: "Four",
        parentId: "2",
        previousSiblingId: "6",
    },
    {
        nodeId: "8",
        name: "Eight",
        parentId: "7",
        previousSiblingId: null,
    },
    {
        nodeId: "2",
        name: "Two",
        parentId: "1",
        previousSiblingId: null,
    },
    {
        nodeId: "6",
        name: "Six",
        parentId: "2",
        previousSiblingId: null,
    },
    {
        nodeId: "3",
        name: "Three",
        parentId: null,
        previousSiblingId: null,
    },
    {
        nodeId: "5",
        name: "Five",
        parentId: "4",
        previousSiblingId: null,
    },
    {
        nodeId: "7",
        name: "Seven",
        parentId: null,
        previousSiblingId: "1",
    },
    {
        nodeId: "1",
        name: "One",
        parentId: null,
        previousSiblingId: "3",
    },
]

console.log("HOW ARRAY", buildTree(_input))
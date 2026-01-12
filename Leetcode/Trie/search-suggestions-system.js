
class TrieNode {
    constructor() {
        this.children = new Map();
        this.suggestions = [];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
            
            if (node.suggestions.length < 3) {
                node.suggestions.push(word);
            }
        }
    }
}

var suggestedProducts = function(products, searchWord) {
    products.sort();

    const trie = new Trie();
    for (const product of products) {
        trie.insert(product);
    }

    const result = [];
    let currentNode = trie.root;
    let foundPath = true;

    for (const char of searchWord) {
        if (foundPath && currentNode.children.has(char)) {
            currentNode = currentNode.children.get(char);
            result.push(currentNode.suggestions);
        } else {
            result.push([]);
            foundPath = false;
        }
    }

    return result;
};

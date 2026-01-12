
class TrieNode {
    constructor() {
        this.children = {}; // Maps character to TrieNode
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!(char in current.children)) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

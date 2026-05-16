class TrieNode {
    constructor(){
        this.children={}
        this.end=false
    }
}

class PrefixTree {
    constructor() {
        this.root= new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current=this.root
        for(const ch of word){
            if(!current.children[ch]){
                current.children[ch]=new TrieNode()
            }
            current=current.children[ch]
        }
        if(!current.end) current.end=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current=this.root
        for(const ch of word){
            if(!current.children[ch]){
                return false
            }
            current=current.children[ch]
        }
        if(!current.end) return false
        return true
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current=this.root
        for(const ch of prefix){
            if(!current.children[ch]){
                return false
            }
            current=current.children[ch]
        }
        return true
    }
}


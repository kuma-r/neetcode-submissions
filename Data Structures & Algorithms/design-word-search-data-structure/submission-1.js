function TrieNode(){
    this.children={}
    this.endOfWord=false
}

class WordDictionary {
    constructor() {
        this.root=new TrieNode()
    }   

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current=this.root
        for(const ch of word){
            if(!current.children[ch]){
                current.children[ch]=new TrieNode()
            }
            current=current.children[ch]
        }
        current.endOfWord=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word,current=null) {
        if(!current){
            current=this.root
        }
        let index=0
        for(const ch of word){
            index++
            if(ch=="."){
                for(const key of Object.keys(current.children)){
                    if(this.search(word.slice(index),current.children[key])) return true
                }
                return false
            }
            else{
                if(!current.children[ch]){
                 return false
                }
                current=current.children[ch]
            }
        }
        return current.endOfWord    
    }

}

function TrieNode(){
    this.children={}
    this.word=false
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
        for(let ch of word){
            if(!current.children[ch]){
                current.children[ch]=new TrieNode()
            }
            current=current.children[ch]
        }
        current.word=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(word,current){
            for(let i=0;i<word.length;i++){
                if(word[i]=="."){
                    for(const key of Object.keys(current.children)){
                        if(dfs(word.slice(i+1),current.children[key])) return true
                    }
                    return false
                }else{
                    if(!current.children[word[i]]){
                        return false
                    }
                    current=current.children[word[i]]
                }
            }
            return current.word
        }
        return dfs(word,this.root)
    }
}

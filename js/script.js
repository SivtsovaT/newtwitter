function someFunc() {
    counter();
    add();
   
}

let sum = 0;
let count = document.getElementById("post_count");
count.value = sum;

function counter() {
    sum +=1;
    count.value = sum;
    let elem = document.getElementById("post_count");
    elem.innerHTML = sum;
    let el =  document.querySelector('.red');
    el.style.color = 'red';
}

function add() {
    
   
      class PostList {
        constructor(text, srcStar, altStar, srcTrash, altTrash, srcHeart, altHeart, parentSelector, ...classes) {
            this.text = text;            
            this.srcStar = srcStar;
            this.altStar = altStar;
            this.srcTrash = srcTrash;
            this.altTrash = altTrash;
            this.srcHeart = srcHeart;
            this.altHeart = altHeart;          

            this.parent = document.querySelector('.post-list');
        }
    
        render() {
            let answer = document.getElementById("answer");
            const postList = document.createElement('div');
            postList.innerHTML = `
                                   
            <div class ="post-list-item_text">${answer.value}</div>
            <img class = 'star-solid' src=${this.srcStar} alt=${this.altStar} > 
            <img class = 'trash-solid' src=${this.srcTrash} alt=${this.altTrash} >
            <img class = 'heart-solid' src=${this.srcHeart} alt=${this.altHeart} >
                        
            `;
            this.parent.append(postList);
        }
    }
    new PostList(
        
        "hello",
        "icons/star-solid.svg",
        "star-solid",
        "icons/trash-alt-solid.svg",
        "trash-alt-solid",
        "icons/heart-solid.svg",
        "heart-solid",
        
        ".post-list"
       
    ).render(); 
     
  
  }


    
    
  
    
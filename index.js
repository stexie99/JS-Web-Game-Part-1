function newImage(source,left,bottom){
    let img = document.createElement('img')
    img.src = source
    img.style.position = 'fixed'
    img.style.left = left + 'px'
    img.style.bottom = bottom +'px'
    document.body.append(img)
    return img
}
function newItem(source, left, bottom){
    let img = newImage(source, left, bottom)
    img.addEventListener('dblclick', function(){
        this.remove()
    })
}
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src= 'assets/pine-tree.png'
// pineTree.style.position='fixed'
// pineTree.style.left='450px'
// pineTree.style.bottom='200px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png', 450, 200)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


// sword.addEventListener('click', function(){
//     sword.remove()
// })

newItem('assets/shield.png', 165, 185)
newItem('assets/sword.png',500,405)
newItem('assets/staff.png', 600, 100)
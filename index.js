function newImage(source,left,bottom){
    let img = document.createElement('img')
    img.src = source
    img.style.position = 'fixed'
    img.style.left = left+ 'px'
    img.style.bottom = bottom +'px'
    document.body.append(img)
}






let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src= 'assets/pine-tree.png'
// pineTree.style.position='fixed'
// pineTree.style.left='450px'
// pineTree.style.bottom='200px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png', 450, 200)
newImage('')
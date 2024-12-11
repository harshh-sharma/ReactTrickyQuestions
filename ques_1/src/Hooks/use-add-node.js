export const insertNode = (tree,folderId,name,isFileOrFolder) => {
  if(tree?.id == folderId && isFileOrFolder){
    tree?.items?.push({
      id:Date.now(),
      name,
      isFolder:isFileOrFolder,
      items:[]
    })

    return tree;
  }

  let latestNode;
  latestNode = tree?.items?.map((obj) => {
    insertNode(obj,folderId,name,isFileOrFolder);
  })

  return {...tree,latestNode}
}
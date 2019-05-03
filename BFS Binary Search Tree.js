var bfs = function(root) 
{
    var queue=[];
    
    if(!root)
        return list;
    
    queue.push(root);
    while(queue.length>0)
    {
        var tempNode=new TreeNode();
        tempNode=queue.shift();
        console.log('Node ');
        console.log(tempNode.val);
        if (tempNode.left != null) 
        { 
                queue.push(tempNode.left); 
        } 
        if (tempNode.right != null) 
        { 
                queue.push(tempNode.right); 
        }
    }
};
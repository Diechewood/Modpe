function useItem(x,y,z,itemId,blockId)
{
        if(itemId==292&&blockId==4)//If your item is a Iron hoe, and the block your using it on is stone
        {
                explode(x,y,z,3.1);//Blow it up!
                
        }
        else if(blockId==5)//If the block we are using is a wooden plank
        {
                setTile(x,y,z,11);//Turn it into lava!!
        }
        else if(itemId==287)//If our item is string
        {
                ImAHelperFunction(x,y,z);//make a gold tower!
        }
        
}
function ImAHelperFunction(x,y,z)
{
        for(var i=0;i<5;i++)
        {
                setTile(x,y+i,z,57);
        }
}

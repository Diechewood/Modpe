function useItem(x,y,z,itemId,blockId,side)
{
                if(itemId==64&&blockId==1)
                {
                                setTile(x,y-1,z,0);
                                setTile(x,y-2,z,0);

                }
                else if(blockId==17)
                {
                                 setTile(x,y+1,z,47)
                                 setTile(x,y+2,z,47)

                 }

}

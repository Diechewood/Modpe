function useItem(x,y,z,itemId,blockId,side)
{
        if(itemId==259)//Tap Nether Rack
        {
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                clientMessage("eiD lliW ouY");
                setNightMode(isNight); 
        }

}

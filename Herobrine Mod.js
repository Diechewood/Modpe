function useItem(x,y,z,itemId,blockId,side)
{
        if(blockId==87)//Tap Nether Rack
        {
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                clientMessage("eiD lliW ouY");
                setNightMode(14500); 
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
        }

}
